import DS from 'ember-data';
import computed from 'ember-computed-decorators';

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
  devices: hasMany('device'),
  customerType: attr('number'),
  timeZone: attr('number'),

  // computed
  @computed
  customerTypeHuman() {
    return [
      'Residential',
      'Commercial'
    ].objectAt(this.get('customerType'));
  },
  @computed
  timeZoneHuman() {
    return [
      'PT',
      'MT',
      'CT',
      'ET'
    ].objectAt(this.get('timeZone'));
  }

});