import Ember from 'ember';
const {
  isEmpty,
  inject: { service },
  Route,
  RSVP: { all }
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

    signOut() {
      this.get('session').close();
      this.transitionTo('index');
    },

    authenticate() {
      this._setupMeService()
      .then(() => {
        this.transitionTo('me');
      });
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
    return new Ember.RSVP.Promise((resolve) => {
      store.query('user', {
        orderBy: 'uid',
        equalTo: currentUser.uid
      })
      .then((users) => {
        if (isEmpty(users)) {
          this._createUserWithGoogle(currentUser)
          .then((result) => {
            this._setCurrentUserOnMe(result);
            resolve();
          });
        } else {
          let user = users.get('firstObject');
          this._setCurrentUserOnMe(user);
          resolve();
        }
      });
    });
  },

  _createUserWithGoogle(currentUser) {
    let store = this.get('store');
    let { email, displayName, uid, photoURL } = currentUser;
    return new Ember.RSVP.Promise((resolve) => {
      let newUser = store.createRecord('user', {
        email, displayName, uid, photoURL
      });
      newUser.save()
      .then(function() {
        resolve(newUser);
      });
    });
  },

  _setCurrentUserOnMe(currentUser) {
    this.get('meService').set('model', currentUser);
  }
});