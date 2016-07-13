import Ember from 'ember';
import config from './config/environment';
const {
  Router
} = Ember;
const router = Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

router.map(function() {
  this.authenticatedRoute('index', { path: '/' });
  this.route('login');
  this.authenticatedRoute('me');
  this.authenticatedRoute('admin');
});

export default router;
