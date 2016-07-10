/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    inlineContent: {
      favicon: { content: "<link rel='icon' href='/assets/images/favicon.ico'>" },
      materializeIcons: {content: "<link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>" }
    }
  });

  var pickFiles = require('broccoli-funnel');
  var mergeTrees = require('broccoli-merge-trees');

  return mergeTrees([ app.toTree() ]);
};
