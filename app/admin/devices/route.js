import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({

  model() {
    return this.get('store').query('device', {
      orderBy: 'isNew',
      equalTo: true
    });
  }

});