import Ember from 'ember';

const {
  Component,
  inject: { service }
} = Ember;

export default Component.extend({

  // attributes
  model: null,
  canRemove: false,

  // events
  actions: {
    removeAlert(alert) {
      let organization = alert.get('organization');
      organization.get('alerts').removeObject(alert);
      organization.get('content').save();
    }
  }

});
