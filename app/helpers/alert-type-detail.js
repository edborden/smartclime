import Ember from 'ember';

export function alertTypeDetail(alertType) {
  switch(alertType[0]) {
    case 'Bypass':
      return 'Bypass mode entered';
    case 'Override':
      return 'Override mode entered'
    case 'Run':
      return 'Run mode entered during off hours'
  }
}

export default Ember.Helper.helper(alertTypeDetail);