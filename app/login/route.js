import Ember from 'ember';
const {
  Route
} = Ember;

export default Route.extend({

  // events
  beforeModel() {
    if (this.get('session').get('isAuthenticated')) {
      this.transitionTo('me');
    }
  },

  // actions
  actions: {

    async signIn(provider) {
      let session = this.get('session');
      await session.open('firebase', { provider });
      this.send('authenticate');
    }

  }

});