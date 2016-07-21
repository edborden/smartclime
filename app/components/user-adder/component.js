import Ember from 'ember';
import EmberValidations from 'ember-validations';
import MdBtn from 'smartclime/components/md-btn/component';
import CheckUser from 'smartclime/mixins/check-user';

const {
  inject: { service },
  isEmpty
} = Ember;

export default MdBtn.extend(EmberValidations, CheckUser, {

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
      let organization = this.get('organization');
      await this._checkIfUserExists(email);
      let users = this.get('foundUsers');
      let user;
      if (isEmpty(users)) {
        user = this.get('store').createRecord('user', {
          email,
          organization
        });
      } else {
        user = users.get('firstObject');
        user.set('organization', organization);
      }
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
