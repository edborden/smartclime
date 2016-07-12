/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'smartclime',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: { FEATURES: {} },
    APP: {},
    torii: {
      sessionServiceName: 'session'
    }
  };

  if (environment === 'development') {
    ENV.firebase = {
      apiKey: "AIzaSyCgD6qZr4p0EQErc328xdT2G2XK4Ccvihc",
      authDomain: "smartclime-dev.firebaseapp.com",
      databaseURL: "https://smartclime-dev.firebaseio.com",
      storageBucket: "smartclime-dev.appspot.com"
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'staging') {
    ENV.staging = true;
    ENV.environment = 'production';
  }

  if (environment === 'production') {
    ENV.firebase = {
      apiKey: "AIzaSyCxemskTsw23mf3_7sArXh48guU-vnDkzw",
      authDomain: "smartclime-70e4f.firebaseapp.com",
      databaseURL: "https://smartclime-70e4f.firebaseio.com",
      storageBucket: "smartclime-70e4f.appspot.com"
    }
  }

  if (ENV.staging) {
    ENV.firebase = {
      apiKey: "AIzaSyCPsA6Mb2dO0oZH5XM_j44zJcWpb5pEBfE",
      authDomain: "smartclime-staging.firebaseapp.com",
      databaseURL: "https://smartclime-staging.firebaseio.com",
      storageBucket: "smartclime-staging.appspot.com"
    }    
  }

  return ENV;
};
