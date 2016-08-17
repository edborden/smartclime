import Ember from 'ember';
import computed from 'ember-computed-decorators';
import EmberValidations from 'ember-validations';

const {
  Component,
  inject: { service }
} = Ember;

export default Component.extend(EmberValidations, {

  // attributes
  tagName: 'li',
  classNames: [ 'collection-item', 'click-fix' ],
  device: null,
  modal: false,
  deviceName: null,
  deviceOrganization: null,

  // services
  store: service(),

  // computed
  @computed
  organizations() {
    return this.get('store').findAll('organization');
  },

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
      let device = this.get('device');
      let name = this.get('deviceName');
      let organization = this.get('deviceOrganization');
      device.setProperties({
        name,
        organization,
        isNew: false
      });
      await device.save();
      organization.get('devices').pushObject(device);
      await organization.save();
    }
  },

  // validations
  validations: {
    deviceName: {
      presence: true
    },
    deviceOrganization: {
      presence: true
    }
  }

});
