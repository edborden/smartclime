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
