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
    },
    keen: {
      projectId: '5785561b383144258cf97520',
      readKey: '35eb49904f09bb75a17cfe88dbd20c674f0648b7db28bcd6b562c3d4d6b8d5703457b11ee3b11c9b3d1b210f913bef178606e6d7056923986a82caf41ccd3a650c377d916da88f68ced6449ec5cb06cff875ab79cd942e5bccef6718ceee5c0d'
    },
    firebase: {
      apiKey: "AIzaSyCxemskTsw23mf3_7sArXh48guU-vnDkzw",
      authDomain: "smartclime-70e4f.firebaseapp.com",
      databaseURL: "https://smartclime-70e4f.firebaseio.com",
      storageBucket: "smartclime-70e4f.appspot.com"
    }
  };

  if (environment === 'development') {

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

  }

  if (ENV.staging) {

  }

  return ENV;
};
