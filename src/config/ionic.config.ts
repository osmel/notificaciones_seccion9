import { CloudSettings } from '@ionic/cloud-angular';

export const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'aec6af17'
  },

  'push': {
    'sender_id': '118519821243',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true,
        'alert': true
      },
      'android': {
        'iconColor': '#5e0e9d'
      }
    }
  }
  
};



