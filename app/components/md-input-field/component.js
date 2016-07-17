import Ember from 'ember';
import computed from 'ember-computed-decorators';

const {
  Component,
  isPresent
} = Ember;

export default Component.extend({

  // attributes
  classNames: ['input-field col'],
  bindAttributes: ['disabled', 'readonly', 'autofocus'],
  validate: false,

  // computed
  @computed('validate', 'errors')
  isValid() {
    return (!this.get('validate') && !isPresent(this.get('errors.firstObject')));
  },

  @computed('validate', 'errors')
  isInvalid() {
    return (!this.get('validate') && isPresent(this.get('errors.firstObject')));
  },

  @computed('elementId')
  id() {
    return `${this.get('elementId')}-input`;
  },

  // events
  didInsertElement() {
    this._super(...arguments);
    // pad the errors element when an icon is present
    if (isPresent(this.get('icon'))) {
      this.$('> span').css('padding-left', '3rem');
    }
  },

  // helpers
  _setupLabel() {
    const $label = this.$('> label');
    if (isPresent(this.get('value')) && !$label.hasClass('active')) {
      $label.addClass('active');
    }
  }

});