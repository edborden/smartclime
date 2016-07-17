import Ember from 'ember';
import EmberValidations from 'ember-validations';

const {
  Component,
  inject: { service }
} = Ember;

export default Component.extend(EmberValidations, {

  // attributes
  tagName: 'a',
  classNames: [ 'btn-floating', 'btn-large', 'waves-effect', 'waves-light', 'red' ],
  modal: false,
  name: null,

  // services
  store: service(),

  // events
  click() {
    this.set('modal', true);
  },

  // actions
  actions: {
    toggleModal() {
      this.set('modal', false);
    },
    async save() {
      let name = this.get('name');
      let organization = this.get('store').createRecord('organization', {
        name
      });
      await organization.save();
      this.send('toggleModal');
    }
  },

  // validations
  validations: {
    name: {
      presence: true
    }
  }

});
