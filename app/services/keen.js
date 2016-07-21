/*global Keen*/
import config from '../config/environment';
import Ember from 'ember';
import computed from 'ember-computed-decorators';

const {
  Service
} = Ember;

export default Service.extend({

  @computed
  client() {
    return new Keen({
      projectId: config.keen.projectId,
      readKey: config.keen.readKey,
      protocol: 'auto',
      host: 'api.keen.io/3.0',
      requestType: 'jsonp'
    });
  }

});