import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({

  // attributes
  alertType: attr('string'),
  createdAt: attr('string'),

  // associations
  device: belongsTo('device'),
  organization: belongsTo('organization')

});