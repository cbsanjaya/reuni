import { uid } from 'quasar'

export default {
  logEvent (category, action, label, value = 0) {
    window.dataLayer.push({
      'event': 'customEvent',
      'category': category,
      'action': action,
      'label': label,
      'value': value,
      'cid': this.getCid()
    })
  },

  logPage (path) {
    window.dataLayer.push({
      'event': 'customPageView',
      'path': path,
      'cid': this.getCid()
    })
  },

  getCid () {
    if (!window.localStorage.uid) {
      window.localStorage.uid = uid()
    }
    return window.localStorage.uid
  }
}
