import DS from 'ember-data';
import { equal } from 'ember-computed-decorators';

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
  @equal('organization.id', '-KQ2ZQSg7mcgFSUupLz0') admin: null

});