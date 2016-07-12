/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'smartclime',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: { FEATURES: {} },
    APP: {},
    firebase: {
      apiKey: "AIzaSyCxemskTsw23mf3_7sArXh48guU-vnDkzw",
      authDomain: "smartclime-70e4f.firebaseapp.com",
      databaseURL: "https://smartclime-70e4f.firebaseio.com",
      storageBucket: "smartclime-70e4f.appspot.com"
    },
    torii: {
      sessionServiceName: 'session'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
