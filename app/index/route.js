import Ember from 'ember';
const {
  Route
} = Ember;
import HasMe from 'smartclime/mixins/has-me';

export default Route.extend(HasMe, {

  beforeModel() {
    this.replaceWith('dashboard', this.get('me').get('organization'));
  }

});