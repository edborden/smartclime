import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo,
  hasMany
} = DS;

export default Model.extend({

  // attributes
  uid: attr('string'),
  name: attr('string'),
  hardwareId: attr('string'),
  isNew: attr('boolean'),
  status: attr('string'),
  updatedAt: attr('string'),

  // associations
  organization: belongsTo('organization'),
  alerts: hasMany('alert')

});