import Ember from 'ember';
import HasMe from 'smartclime/mixins/has-me';
import EmberValidations from 'ember-validations';

const {
  Component,
  inject: { service }
} = Ember;

export default Component.extend(EmberValidations, HasMe, {

  // attributes
  device: null,
  modal: false,
  deviceName: null,

  // services
  store: service(),
  router: service('-routing'),

  // actions
  actions: {
    toggleModal() {
      this.set('deviceName', null);
      this.toggleProperty('modal');
    },
    async remove() {
      let device = this.get('device');
      let router = this.get('router');
      let organization = device.get('organization');
      await organization;
      let devices = organization.get('devices');
      await devices;
      devices.removeObject(device);
      organization.get('content').save();
      device.setProperties({
        name: null,
        organization: null,
        isNew: true
      });
      device.save();
      router.transitionTo('admin');
    },
    edit() {
      let device = this.get('device');
      let name = this.get('deviceName');
      device.set('name', name);
      device.save();
      this.send('toggleModal');   
    }
  },

  // validations
  validations: {
    deviceName: {
      presence: true
    }
  }

});
