import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({

  // attributes
  tagName: 'ul',

  // events
  didInsertElement() {
    this.$().collapsible();
  }

});
