import Ember from 'ember';
import computed from 'ember-computed-decorators';

const {
  Component,
  isPresent
} = Ember;

export default Component.extend({

  // attributes
  tagName: 'a',
  classNames: [ 'waves-effect', 'waves-light' ],
  classNameBindings: [ 'large:btn-large', 'color', 'text:btn:btn-floating', 'disabled' ],
  attributeBindings: [ 'disabled' ],
  color: null,
  icon: 'plus',
  text: null,
  large: false,
  action: null,
  disabled: null,

  // actions
  click() {
    if (this.get('action')) {
      this.sendAction();
    }
  }

});