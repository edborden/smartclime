import Ember from 'ember';
import EmberValidations from 'ember-validations';
import MdBtn from 'smartclime/components/md-btn/component';

const {
  inject: { service }
} = Ember;

export default MdBtn.extend(EmberValidations, {

  // attributes
  modal: false,
  email: null,
  text: 'Add User',
  organization: null,

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
      let email = this.get('email');
      let organization = this.get('organization')
      let user = this.get('store').createRecord('user', {
        email,
        organization
      });
      await user.save();
      organization.get('users').pushObject(user);
      await organization.save();
      this.send('toggleModal');
    }
  },

  // validations
  validations: {
    email: {
      format: {
        with: /@/,
        message: "Doesn't look like a valid email. Please try again."
      }
    }
  }

});
