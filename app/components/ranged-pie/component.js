import Ember from 'ember';
import ParentComponentSupport from 'ember-composability/mixins/parent-component-support';

const {
  Component
} = Ember;

export default Component.extend(ParentComponentSupport, {

  // attributes
  classNames: ['ranged-pie'],
  start: null,
  end: null,
  setting: false,
  action: 'rangePicked',
  _renderChart: null,

  // actions
  actions: {
    rangePicked(dates) {
      this._renderChart(dates);
    }
  }

});