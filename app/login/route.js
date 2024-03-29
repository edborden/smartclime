import Ember from 'ember';
const {
  Route
} = Ember;

export default Route.extend({

  // actions
  actions: {

    async signIn(provider='google') {
      let session = this.get('session');
      await session.open('firebase', { provider });
      this.send('authenticate');
    }

  }

});