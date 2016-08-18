import Ember from 'ember';
import HasMe from 'smartclime/mixins/has-me';

const {
  Component,
  inject: { service }
} = Ember;

export default Component.extend(HasMe, {

  // attributes
  classNames: ['eula-accepter'],

  // services
  router: service('-routing'),

  // actions
  actions: {
    async accept() {
      let me = this.get('me');
      me.set('eula', true);
      await me.save();
      this.get('router').transitionTo('index');
    }
  }

});
