import Ember from 'ember';

const {
  Component,
  isPresent
} = Ember;

const MdInputComponent = Component.extend({
  classNames: ['input-field'],
  type: 'text',

  didInsertElement() {
    this._super(...arguments);
    // make sure the label moves when a value is bound.
    this._setupLabel();
  },

  actions: {
    validateProperty(changeset, property) {
      //return changeset.validate(property);
      return;
    }
  },

  // helpers
  _setupLabel() {
    let $label = this.$('> label');
    let property = this.get('property');
    let value = this.get('changeset').get(property);
    if (isPresent(value) && !$label.hasClass('active')) {
      $label.addClass('active');
    }
  }
});

MdInputComponent.reopenClass({
  positionalParams: ['type', 'changeset', 'property']
});

export default MdInputComponent;