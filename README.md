# Smartclime

Dashboard application for Smartclime devices.

## System Architecture

### Backend business logic for raw telemetry data

The server-side scripts are contained in \scripts. These are hosted by Scriptr.io which manages all incoming device data from the SmartClime systems.  These scripts handle all of the package parsing and interface to the databases.

### Real-time database

Customer data, business and relationship associations, and current telemetry data are stored in a Firebase managed NoSQL database.

### Analytics

Historical analytics are performed through a managed service called Keen.io. Event data is logged through the backend scripts to Keen, and queries are performed on the fly from the front-end on demand via Keen's web API.

### Front-end

The front-end application is based on Ember.JS, which is an open-source web framework ('single page application' or Javascript MVVM). Ember provides build tools through a CLI, a templating engine, an internal data model, and a web component framework supported by community add-ons.

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

### Static Hosting

Static files are hosted on [Firebase](http://firebase.google.com). Firebase configuration is contained in `firebase.json`.

## Application-level System Administration

### Admin Account

The dashboard@smartclime.com google account has ownership of the Firebase, Scriptr.io, and Keen.io accounts. Through that gmail account any of those services can be managed directly. Contact Ed Borden or Cari Bortfield for login info.

### Github Admin

Access to this repository can be via individual Github accounts (contact Ed Borden to be added) or via an administrative account linked to smartclime@dashboard.com (contact Ed Borden for credentials).

### Admin Role in SmartClime Dashboard

The "Admin" role within the SmartClime dashboard allows for access to areas and functions for:
* Provisioning new devices into an organization
* Creating/Editing/Delete organizations
* Creating/Editing/Deleting users in an organization

The "Admin" role is automatically applied to all users within the SmartClime organization.

### Alerts

Alerts are created for the following conditions, limited to 1 per type, per device, in any 2 day period:
* Enter 'Override' or 'Bypass' at any time.
* For a device owned by an Organization with a 'Commercial' customer type, enter 'Run' or 'Save' between the hours of 8PM - 4AM, or anytime on Saturday or Sunday. This does take into account the time zone setting for the organization.

Current limitations of this system:
* For the after hours alert, if the device goes into 'Run' or 'Save' during normal hours, but then runs all night, the system doesn't check for that.
* Hours settings are not yet configurable, so for some type of business that might run during the weekends but not at night, you would be getting false alerts.

## Ember.JS Development Instructions

### Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

### Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

### Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* `ember build`

### Running Tests

* `ember test`
* `ember test --server`

## Deploying

### Environments

* Staging: branch "staging" is linked to [smartclime-staging](https://smartclime-staging.firebaseapp.com/) on Firebase.

* Production: branch "master" is linked to [smartclime](https://smartclime-70e4f.firebaseapp.com/) on Firebase.

### Triggering Deployments

Continuous Integration (CI) is managed via [CircleCI](http://circleci.com). Updates to this Github repository will trigger a CircleCI build automatically. CircleCI configuration is contained in `circle.yml`. This configuration depends utilizes [Firebase CLI](https://github.com/firebase/firebase-tools) directly, which depends on a local secret token, `$FIREBASE_TOKEN`. This token can be obtained using Firebase CLI locally with the command `firebase login:ci`.

* Does a fresh build
* Runs tests
* Deploys to Firebase