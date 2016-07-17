import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({

  // attributes
  classNames: ['col', 's1'],
  action: 'save',
  isValid: true,

  // actions
  actions: {
    clicked() {
      this.sendAction();
    }
  }

});
