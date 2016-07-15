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
      this.transitionTo('index');
    },

    accessDenied() {
      this.transitionTo('login');
    }
  },

  // helpers
  _setupMeService() {
    let store = this.get('store');
    let session = this.get('session');
    let currentUser = session.get('currentUser');
    return new RSVP.Promise((resolve) => {
      store.query('user', {
        orderBy: 'uid',
        equalTo: currentUser.uid
      })
      .then((users) => {
        resolve();
      });
    });
  },

  _removeMe() {
    this.get('meService').set('model', null);    
  },

  _createUserWithGoogle(currentUser) {
    let store = this.get('store');
    let { email, displayName, uid, photoURL } = currentUser;
    let newUser = store.createRecord('user', {
      email, displayName, uid, photoURL
    });
    return newUser.save();
  },

  _setCurrentUserOnMe(currentUser) {
    this.get('meService').set('model', currentUser);
  }
});