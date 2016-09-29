import Ember from 'ember';

const {
  run: { bind },
  Component
} = Ember;

export default Component.extend({

  selectMonths: true,
  selectYears: 2,
  min: '',
  max: '',

  didInsertElement() {
    this._super(...arguments);
    this._setupPicker();
  },

  willDestroyElement() {
    this._super(...arguments);
    this._teardownPicker();
  },

  _setupPicker() {
    let datePickerOptions = this.getProperties('selectMonths', 'selectYears', 'min', 'max');
    datePickerOptions.onSet = bind(this, this._onDateSet);

    this.$('.datepicker').pickadate(datePickerOptions);
  },

  _teardownPicker() {
    const $pickadate = this.$('.datepicker').data('pickadate');
    if ($pickadate) {
      $pickadate.stop();
    }
  },

  _onDateSet(evt) {
    if (evt.select) {
      this.set('value', evt.select);
    }
  }
});