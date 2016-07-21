/*global Keen*/
import Ember from 'ember';
import computed from 'ember-computed-decorators';

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
  filterName: 'device.hardwareId',
  filterValue: null,
  timeframe: 'this_7_days',
  targetProperty: 'duration',
  interval: null,
  chartType: 'piechart',

  // events
  didInsertElement() {
    Keen.ready(() => {
      let query = this.get('query');
      let chartOptions = this.get('chartOptions');
      this.get('keen').get('client').draw(query, this.element, chartOptions);
    });
  },

  @computed
  chartOptions() {
    let { chartType } = this;
    return { chartType, colors: ['#852667'] };
  },

  @computed
  query() {
    return new Keen.Query(this.queryType, this.get('queryOptions'));
  },

  @computed
  queryOptions() {
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