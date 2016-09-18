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
* `ember build`

### Running Tests

* `ember test`
* `ember test --server`

## Deploying

### Hosting

Static files are hosted on [Firebase](http://firebase.google.com). Firebase configuration is contained in `firebase.json`.

### Environments

* Staging: branch "staging" is linked to [smartclime-staging](https://smartclime-staging.firebaseapp.com/) on Firebase.

* Production: branch "master" is linked to [smartclime](https://smartclime-70e4f.firebaseapp.com/) on Firebase.

### Triggering Deployments

Continuous Integration (CI) is managed via [CircleCI](http://circleci.com). Updates to this Github repository will trigger a CircleCI build automatically. CircleCI configuration is contained in `circle.yml`. This configuration depends utilizes [Firebase CLI](https://github.com/firebase/firebase-tools) directly, which depends on a local secret token, `$FIREBASE_TOKEN`. This token can be obtained using Firebase CLI locally with the command `firebase login:ci`.

* Does a fresh build
* Runs tests
* Deploys to Firebase

## System Administration

### Admin Account

The dashboard@smartclime.com google account has ownership of the Firebase accounts and the Keen.io account. Once logged into dashboard@smartclime.com, any of those services can be managed directly. Contact Ed Borden or Cari Bortfield for login info.

### Admin Role in SmartClime Dashboard

The "Admin" role within the SmartClime dashboard allows for access to areas and functions for:
* Provisioning new devices into an organization
* Creating/Editing/Delete organizations
* Creating/Editing/Deleting users in an organization

The "Admin" role is automatically applied to all users within the SmartClime organization.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

