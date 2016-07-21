import Ember from 'ember';
const {
  Route,
  isPresent
} = Ember;
import HasMe from 'smartclime/mixins/has-me';

export default Route.extend(HasMe, {

  model() {
    return this.get('me').get('organization');
  },

  afterModel(model) {
    if (isPresent(model)) {
      return this.transitionTo('dashboard', model);
    } else {
      return this.transitionTo('orphan');
    }    
  }

});