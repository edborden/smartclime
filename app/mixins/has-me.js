import Ember from 'ember';
import { alias } from 'ember-computed-decorators';

const {
  Mixin,
  inject: { service }
} = Ember;

export default Mixin.create({

  meService: service('me'),
  @alias('meService.model') me: null

});