import Ember from 'ember';

const {
  Mixin,
  inject: { service },
  RSVP: { Promise }
} = Ember;

export default Mixin.create({

  store: service(),
  foundUsers: null,

  _checkIfUserExists(email) {
    let store = this.get('store');
    return new Promise((resolve) => {
      store.query('user', {
        orderBy: 'email',
        equalTo: email
      })
      .then((users) => {
        this.set('foundUsers', users);
        resolve();
      });
    });
  }

});