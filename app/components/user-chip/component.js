import Ember from 'ember';
import computed from 'ember-computed-decorators';

const {
  Component,
  inject: { service }
} = Ember;

export default Component.extend({

  // attributes
  user: null,

  // actions
  actions: {
    async removeUser() {
      let user = this.get('user');
      await user;
      let organization = user.get('organization');
      await organization;
      user.set('organization', null);
      user.save();
      let users = organization.get('users')
      await users;
      users.removeObject(user);
      organization.get('content').save();
    }
  }

});