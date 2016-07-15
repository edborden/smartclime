/* jshint expr:true */
import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import Ember from 'ember';
import { expect } from 'chai';
import sinon from 'sinon';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';
import stubFirebase from '../helpers/stub-firebase';
import unstubFirebase from '../helpers/unstub-firebase';
import createTestRef from '../helpers/create-test-ref';
import replaceAppRef from '../helpers/replace-app-ref';
import replaceFirebaseAppService from '../helpers/replace-firebase-app-service';

describe('Acceptance: /auth', function() {
  let application;
  let signInWithPopupStub;

  const authMock = {
    signInAnonymously() {},
    signInWithPopup() {}
  };

  const firebaseAppMock = {
    auth() {
      return authMock;
    }
  };

  beforeEach(function() {
    stubFirebase();
    signInWithPopupStub = sinon.stub(authMock, 'signInWithPopup');

    application = startApp();
    replaceFirebaseAppService(application, firebaseAppMock);
    replaceAppRef(application, createTestRef('acceptance'));
  });

  afterEach(function() {
    signInWithPopupStub.restore();
    destroyApp(application);
    unstubFirebase();
  });

  it('root redirects to login', function() {
    visit('/');

    andThen(function() {
      expect(currentPath()).to.equal('login');
    });
  });

  describe('google auth', function () {

    let authData;

    beforeEach(function() {
      authData = {
        uid: 'uid1234',
        email: 'test',
        displayName: 'test',
        photoURL: 'test',
        providerData: [{providerId: 'google.com'}]
      };

      signInWithPopupStub.returns(Ember.RSVP.Promise.resolve(authData));
    });

    it('creates a session when the auth method returns data', function () {
      visit('/login');

      click('button');

      andThen(function() {
        expect(currentPath()).to.equal('index');
      });
    });

  }); // google auth

});