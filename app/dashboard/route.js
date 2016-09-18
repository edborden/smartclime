import Ember from 'ember';
const {
  RSVP,
  Route
} = Ember;

export default Route.extend({

  // events
  afterModel(model) {
    return RSVP.all([model.get('devices'), model.get('alerts')]);
  }

});