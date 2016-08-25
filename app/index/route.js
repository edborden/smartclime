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
    let me = this.get('me');
    let eula = me.get('eula');
    if (eula) {
      if (isPresent(model)) {
        if (me.get('admin')) {
          return this.transitionTo('admin');
        } else {
          return this.transitionTo('dashboard', model);
        }
      } else {
        return this.transitionTo('orphan');
      }      
    } else {
      return this.transitionTo('eula');
    }
  }

});