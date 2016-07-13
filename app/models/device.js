import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({

  // attributes
  uid: attr('string'),
  name: attr('string'),

  // associations
  organization: belongsTo('organization')

});