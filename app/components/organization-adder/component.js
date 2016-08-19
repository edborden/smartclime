import Ember from 'ember';
import EmberValidations from 'ember-validations';
import MdBtn from 'smartclime/components/md-btn/component';

const {
  inject: { service }
} = Ember;

export default MdBtn.extend(EmberValidations, {

  // attributes
  large: true,
  color: 'red',
  modal: false,
  name: null,
  customerType: '0',
  timeZone: '0',

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
      let properties = this.getProperties('name', 'timeZone', 'customerType');
      let organization = this.get('store').createRecord('organization', properties);
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
