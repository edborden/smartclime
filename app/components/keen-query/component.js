/*global Keen*/
import Ember from 'ember';

const {
  Component,
  inject: { service }
} = Ember;

export default Component.extend({

  // services
  keen: service(),

  // attributes
  queryType: 'sum',
  eventCollection: 'device',
  groupBy: 'event',
  filterName: null,
  filterValue: null,
  filterOperator: 'in',
  timeframe: 'this_60_days',
  targetProperty: 'duration',
  interval: null,
  chartType: 'piechart',
  title: null,
  waitFor: null,

  // events
  async didInsertElement() {
    let waitFor = this.get('waitFor');
    if (waitFor) {
      await waitFor;
    }
    this._renderChart();
  },

  _renderChart() {
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
      title: this.title
    };
  },

  _query() {
    return new Keen.Query(this.queryType, this._queryOptions());
  },

  _queryOptions() {
    let { 
      eventCollection, 
      timeframe, 
      interval, 
      targetProperty, 
      groupBy, 
      filterName, 
      filterValue,
      filterOperator
    } = this;
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
        operator: filterOperator,
        property_name: filterName,
        property_value: filterValue
      } ];
    }

    return queryOptions;
  }

});