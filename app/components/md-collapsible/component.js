import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({

  // attributes
  tagName: 'ul',
  classNames: [ 'collapsible' ],

  // events
  didInsertElement() {
    this.$().collapsible();
  }

});
