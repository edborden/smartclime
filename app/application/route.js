import Ember from 'ember';
const {
  isEmpty,
  inject: { service },
  Route,
  RSVP
} = Ember;

export default Route.extend({

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
      await this.transitionTo('login');
      this._removeMe();
      // Need to properly manage unloading all records here
      // https://github.com/firebase/emberfire/issues/400
      this.get('session').close();
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
    let currentUser = session.get('currentUser');
    await this._checkIfUserExists(currentUser.uid);
    let users = this.get('foundUsers');
    if (isEmpty(users)) {
      let newUser = this._createUserWithGoogle(currentUser);
      await this._setCurrentUserOnMe(newUser);
    } else {
      let user = users.get('firstObject');
      this._setCurrentUserOnMe(user);
    }
  },

  _checkIfUserExists(uid) {
    let store = this.get('store');
    return new RSVP.Promise((resolve) => {
      store.query('user', {
        orderBy: 'uid',
        equalTo: uid
      })
      .then((users) => {
        this.set('foundUsers', users);
        resolve();
      });
    });
  },

  _removeMe() {
    this.get('meService').set('model', null);    
  },

  async _createUserWithGoogle(currentUser) {
    let store = this.get('store');
    let { email, displayName, uid, photoURL } = currentUser;
    let newUser = store.createRecord('user', {
      email, displayName, uid, photoURL
    });
    await newUser.save();
  },

  _setCurrentUserOnMe(currentUser) {
    this.get('meService').set('model', currentUser);
  }
});