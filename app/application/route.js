import Ember from 'ember';
const {
  isEmpty,
  isPresent,
  inject: { service },
  Route
} = Ember;
import CheckUser from 'smartclime/mixins/check-user';

export default Route.extend(CheckUser, {

  // services
  meService: service('me'),

  // events
  afterModel() {
    if (this.get('session').get('isAuthenticated')) {
      return this._setupMeService();
    }
  },

  // actions
  actions: {

    async signOut() {
      await this._removeMe();
      await this.get('session').close();
      await this.transitionTo('login');
    },

    async authenticate() {
      await this._setupMeService();
      await this.transitionTo('index');
    },

    accessDenied() {
      this.transitionTo('login');
    }
  },

  // helpers
  async _setupMeService() {
    let session = this.get('session');
    let authUser = session.get('currentUser');
    await this._checkIfUserExists(authUser.email);
    let users = this.get('foundUsers');
    if (isEmpty(users)) {
      let newUser = this._createUserWithGoogle(authUser);
      await newUser;
      this._setCurrentUserOnMe(newUser);
    } else {
      let existingUser = users.get('firstObject');
      await this._fillInInfo(authUser, existingUser);
      this._setCurrentUserOnMe(existingUser);
    }
  },

  async _fillInInfo(authUser, existingUser) {
    let { uid, displayName, photoURL } = authUser;
    existingUser.setProperties({ uid, displayName, photoURL });
    existingUser.save();
  },

  async _removeMe() {
    let meService = this.get('meService');
    let me = meService.get('model');
    let organization = me.get('organization');
    await organization;
    if ( isPresent(organization.get('content')) ) {
      organization.get('content').unloadRecord();
    }
    me.unloadRecord();
    // Need to properly manage unloading all records here
    // https://github.com/firebase/emberfire/issues/400
    meService.set('model', null);    
  },

  async _createUserWithGoogle(currentUser) {
    let store = this.get('store');
    let { email, displayName, uid, photoURL } = currentUser;
    let newUser = store.createRecord('user', {
      email, displayName, uid, photoURL
    });
    await newUser;
    await newUser.save();
  },

  _setCurrentUserOnMe(currentUser) {
    this.get('meService').set('model', currentUser);
  }
});