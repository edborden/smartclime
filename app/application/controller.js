import Ember from 'ember';
import computed from 'ember-computed-decorators';
import HasMe from 'smartclime/mixins/has-me';

const {
  Controller
} = Ember;

export default Controller.extend(HasMe, {

  // computed
  @computed('currentRouteName')
  noNav() {
    return ['login'].contains(this.get('currentRouteName'));
  },

  @computed('currentRouteName')
  noContainer() {
    return ['login'].contains(this.get('currentRouteName'));
  },

  @computed('currentRouteName')
  noFooter() {
    return ['login'].contains(this.get('currentRouteName'));
  }

});