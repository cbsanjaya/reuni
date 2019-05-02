import axios from 'axios'

axios.defaults.baseURL = 'https://sheets.googleapis.com/v4/spreadsheets/1AF3mdhB9vvrAtpWX-JBtVkjLhZxqIOhUjFp1JsalO2Y'
axios.defaults.params = {
  key: 'AIzaSyD8WHPt2PCBJM9DgPGY_flFML-dOW0s_iA',
  valueRenderOption: 'UNFORMATTED_VALUE',
  dateTimeRenderOption: 'FORMATTED_STRING'
}
export default async ({ Vue }) => {
  Vue.prototype.$axios = axios
}
