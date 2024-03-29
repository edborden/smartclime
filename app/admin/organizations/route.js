import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({

  model() {
    return this.get('store').findAll('organization');
  },

  actions: {
    destroyOrganization(organization) {
      organization.destroyRecord();
    }
  }

});