import Ember from 'ember';
import HasMe from 'smartclime/mixins/has-me';
const {
  Route
} = Ember;

export default Route.extend(HasMe, {

  beforeModel() {
    let me = this.get('me');
    if (me.admin) {
      this.replaceWith('admin.devices');
    } else {
      this.replaceWith('index');
    }
  }

});