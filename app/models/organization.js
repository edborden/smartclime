import DS from 'ember-data';

const {
  Model,
  attr,
  hasMany
} = DS;

export default Model.extend({

  // attributes
  name: attr('string'),

  // associations
  users: hasMany('user'),
  devices: hasMany('device')

});