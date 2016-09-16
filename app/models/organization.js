import DS from 'ember-data';

const {
  Model,
  attr,
  hasMany
} = DS;

export default Model.extend({

  // attributes
  name: attr('string'),
  customerType: attr('string'),
  timeZone: attr('string'),

  // associations
  users: hasMany('user'),
  devices: hasMany('device'),
  alerts: hasMany('alert')

});