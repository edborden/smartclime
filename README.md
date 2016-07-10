# Smartclime

Dashboard application for Smartclime devices.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Deploying

### Hosting

Static files are hosted on [Firebase](http://firebase.google.com). Firebase configuration is contained in `firebase.json`.

### Triggering Deployments

Continuous Integration (CI) is managed via [CircleCI](http://circleci.com). Updates to this Github repository will trigger a CircleCI build automatically. CircleCI configuration is contained in `circle.yml`. This configuration depends utilizes [Firebase CLI](https://github.com/firebase/firebase-tools) directly, which depends on a local secret token, `$FIREBASE_TOKEN`. This token can be obtained using Firebase CLI locally with the command `firebase login:ci`.

* Does a fresh build
* Runs tests
* Deploys to Firebase

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

