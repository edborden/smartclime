import Ember from 'ember';
import HasMe from 'smartclime/mixins/has-me';

const {
  Routed
} = Ember;

export default Route.extend(HasMe, {

  model() {
    return this.get('store').findAll('organization');
  }

});