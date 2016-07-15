import Ember from 'ember';
import HasMe from 'smartclime/mixins/has-me';

const {
  Route
} = Ember;

export default Route.extend(HasMe, {

  model() {
    return this.get('store').findAll('organization');
  }

});