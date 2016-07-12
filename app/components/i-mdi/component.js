import Ember from 'ember';
import computed from 'ember-computed-decorators';

const {
  Component
} = Ember;

export default Component.extend({

  tagName: 'i',
  icon: null,
  classNames: [ 'mdi' ],
  classNameBindings: [ 'computedIcon' ],

  @computed('icon')
  computedIcon() {
    return `mdi-${this.get('icon')}`;
  }

});