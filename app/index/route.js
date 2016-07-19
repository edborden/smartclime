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

  async afterModel(model) {
    if (isPresent(model)) {
      this.replaceWith('dashboard', model);
    } else {
      this.replaceWith('orphan');
    }    
  }

});