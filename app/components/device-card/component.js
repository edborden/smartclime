import Ember from 'ember';
import HasMe from 'smartclime/mixins/has-me';

const {
  Component,
  inject: { service }
} = Ember;

export default Component.extend(HasMe, {

  // attributes
  classNames: [ 'col', 's12', 'm6', 'l4', 'click-fix' ],
  device: null,

  // services
  routing: service('-routing'),

  // events
  click() {
    // error in routing service API, needs [] for params
    this.get('routing').transitionTo('device', [this.get('device')]);
  }

});
