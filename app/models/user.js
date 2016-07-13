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

  // associations
  organization: belongsTo('organization'),

  // computed
  admin: true // will compute based on org

});