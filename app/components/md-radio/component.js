import Ember from 'ember';
import computed from 'ember-computed-decorators';
import EmberValidations from 'ember-validations';

const {
  Component,
  inject: { service }
} = Ember;

export default Component.extend(EmberValidations, {

  group: null,
  groupValue: null

});