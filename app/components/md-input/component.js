import MaterializeInputField from 'smartclime/components/md-input-field/component';

export default MaterializeInputField.extend({
  type: 'text',

  didInsertElement() {
    this._super(...arguments);
    // make sure the label moves when a value is bound.
    this._setupLabel();
  }
});
