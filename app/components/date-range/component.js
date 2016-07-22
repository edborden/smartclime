import Ember from 'ember';
import EmberValidations from 'ember-validations';

const {
  Component
} = Ember;

export default Component.extend(EmberValidations, {

  // attributes
  start: null,
  end: null,
  setting: false,
  action: 'rangePicked',

  // actions
  actions: {
    setClicked() {
      this.set('setting', true);
    },
    confirm() {
      let { start, end } = this;
      start = this._toISO(start);
      end = this._toISO(end);
      this.sendAction('action', { start, end });
      this.set('setting', false);
      this.set('start', null);
      this.set('end', null);
    }
  },

  _toISO(num) {
    let d = new Date(num);
    return d.toISOString();
  },

  // validations
  validations: {
    start: {
      presence: true
    },
    end: {
      presence: true
    }
  }

});