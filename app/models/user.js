import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({

  // attributes
  displayName: attr('string'),
  email: attr('string'),
  photoURL: attr('string'),
  uid: attr('string'),
  eula: attr('boolean', { defaultValue: false }),

  // associations
  organization: belongsTo('organization'),

  // computed
  admin: true // will compute based on org

});