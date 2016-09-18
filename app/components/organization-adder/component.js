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
  customerType: 'Residential',
  timeZone: 'PT',
  icon: 'plus',
  organization: null,

  // services
  store: service(),

  // events
  init() {
    this._super();
    let organization = this.get('organization');
    if (organization) {
      this.set('customerType', organization.get('customerType'));
      this.set('timeZone', organization.get('timeZone'));
      this.set('name', organization.get('name'));
    }
  },
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
      let organization = this.get('organization');
      if (organization) {
        organization.setProperties(properties);
      } else {
        organization = this.get('store').createRecord('organization', properties);
      }
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
