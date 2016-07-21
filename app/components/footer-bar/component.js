import Ember from 'ember';
import computed from 'ember-computed-decorators';

const {
  Component
} = Ember;

export default Component.extend({

  // attributes
  tagName: 'footer',
  classNames: ['page-footer'],

  // computed
  @computed
  year() {
    let date = new Date();
    return date.getFullYear();
  }

});
