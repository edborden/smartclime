/*global moment*/
import Ember from 'ember';
import ChildComponentSupport from 'ember-composability/mixins/child-component-support';
import RangedPie from 'smartclime/components/ranged-pie/component';
import KeenQuery from 'smartclime/components/keen-query/component';

const {
  run: { bind }
} = Ember;

export default KeenQuery.extend(ChildComponentSupport, {

  // attributes
  _parentComponentTypes: [RangedPie],
  queryType: 'sum',
  eventCollection: 'device',
  groupBy: 'event',
  filterName: 'device.hardwareId',
  filterValue: null,
  filterOperator: 'eq',
  timeframe: {
    start: '2016-07-01T04:00:00.000Z',
    end: '2016-07-30T04:00:00.000Z'
  },
  targetProperty: 'duration',
  interval: null,
  chartType: 'piechart',

  _title() {
    let timeframe = this.get('timeframe');
    let start = timeframe.start;
    let end = timeframe.end;
    let startFormatted = moment(start).format('MMM D, YYYY');
    let endFormatted = moment(end).format('MMM D, YYYY');
    return `${startFormatted} - ${endFormatted}`;
  },

  // events
  didInsertElement() {
    this._super();
    let parent = this.get('composableParent');
    let _renderChart = bind(this, this._renderChart);
    parent.set('_renderChart', _renderChart);
  },

  _renderChart(timeframe) {
    if (timeframe) {
      this.set('timeframe', timeframe);
    }
    this._super();
  },

  chartOptions() {
    let { chartType } = this;
    return { 
      chartType,
      title: this._title()
    };
  }

});