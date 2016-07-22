/*global Keen, moment*/
import Ember from 'ember';
import ChildComponentSupport from 'ember-composability/mixins/child-component-support';
import RangedPie from 'smartclime/components/ranged-pie/component';

const {
  Component,
  inject: { service },
  run: { bind }
} = Ember;

export default Component.extend(ChildComponentSupport, {

  // services
  keen: service(),

  // attributes
  _parentComponentTypes: [RangedPie],
  queryType: 'sum',
  eventCollection: 'device',
  groupBy: 'event',
  filterName: 'device.hardwareId',
  filterValue: null,
  timeframe: {
    start: "2016-07-01T04:00:00.000Z",
    end: "2016-07-30T04:00:00.000Z"
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
    this._renderChart();
    let parent = this.get('composableParent');
    let _renderChart = bind(this, this._renderChart);
    parent.set('_renderChart', _renderChart);
  },

  _renderChart(timeframe) {
    if (timeframe) {
      this.set('timeframe', timeframe);
    }
    Keen.ready(() => {
      let query = this._query();
      let chartOptions = this.chartOptions();
      this.get('keen').get('client').draw(query, this.element, chartOptions);
    });    
  },

  chartOptions() {
    let { chartType } = this;
    return { 
      chartType,
      title: this._title()
    };
  },

  _query() {
    return new Keen.Query(this.queryType, this._queryOptions());
  },

  _queryOptions() {
    let { eventCollection, timeframe, interval, targetProperty, groupBy, filterName, filterValue } = this;
    let queryOptions = {
      eventCollection,
      timeframe,
      interval,
      targetProperty,
      groupBy
    };

    if (filterName) {
      // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
      queryOptions.filters = [ {
        operator: 'eq',
        property_name: filterName,
        property_value: filterValue
      } ];
    }

    return queryOptions;
  }

});