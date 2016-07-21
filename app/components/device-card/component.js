import Ember from 'ember';
import computed from 'ember-computed-decorators';

const {
  Component,
  inject: { service }
} = Ember;

export default Component.extend({

  // attributes
  classNames: [ 'col', 's12', 'm6', 'l4' ],
  device: null,

  // services
  routing: service('-routing'),

  // events
  click() {
    this.get('routing').transitionTo('device', this.get('device'));
  }

});
