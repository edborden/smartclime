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

    let client = this.get('keen').get('client');

    Keen.ready(() => {
      let chartOptions = this.chartOptions();
      let query = this._query();
      let chart = new Keen.Dataviz()
        .el(this.element)
        .attributes(chartOptions)
        .prepare(); // start spinner

      client.run(query, function(err, res) {
        if (err) {
          // Display the API error
          chart.error(err.message);
        } else {
          // Handle the response
          console.log(this,res);
          res.result.forEach(function(item) {
            let minutes = item.result / 60;
            let rounded = Math.round(minutes);
            item.result = rounded;
          });
          chart
            .parseRequest(this)
            .render();
        }
      });  
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
      interval, 
      targetProperty, 
      groupBy, 
      filterName, 
      filterValue,
      filterOperator
    } = this;
    let queryOptions = {
      eventCollection,
      timeframe: this.get('timeframe'),
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
      }, {
        operator: 'in',
        property_name: 'event',
        property_value: [ 'Override', 'Run', 'Save' ]
      } ];
    }

    return queryOptions;
  }

});