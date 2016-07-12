import Ember from 'ember';
import computed from 'ember-computed-decorators';

const {
  Component,
  inject: { service }
} = Ember;

export default Component.extend({

  // attributes
  tagName: 'footer',
  classNames: ['page-footer'],

  // services
  store: service(),

  // computed
  @computed
  year() {
    let date = new Date();
    return date.getFullYear();
  }

});
