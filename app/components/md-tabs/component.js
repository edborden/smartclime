import Ember from 'ember';
import ParentComponentSupport from 'ember-composability/mixins/parent-component-support';

const {
  Component
} = Ember;

export default Component.extend(ParentComponentSupport, {
  classNames: ['materialize-tabs', 'row'],

  didInsertElement() {
    this.$().tabs();
  }

});
