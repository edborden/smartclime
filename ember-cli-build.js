/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    babel: {
      includePolyfill: true,
      optional: ['es7.decorators']
    },
    inlineContent: {
      favicon: { content: "<link rel='icon' href='/assets/images/favicon.ico'>" }
    }
  });

  var pickFiles = require('broccoli-funnel');
  var mergeTrees = require('broccoli-merge-trees');

  // Materialize
  var materializeFonts = pickFiles('bower_components/materialize/fonts/roboto', {
    destDir: '/fonts/roboto'
  });

  // Materialize Icons
  var materializeIcons = pickFiles('bower_components/mdi/fonts', {
    destDir: '/fonts/mdi'
  });  

  return mergeTrees([ app.toTree(), materializeFonts, materializeIcons ]);
};
