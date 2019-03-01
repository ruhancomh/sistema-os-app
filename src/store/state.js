// https://vuex.vuejs.org/en/state.html

export default {
  API_URL: 'http://127.0.0.1:8000/api/',
  //API_URL: 'http://clean-sistema-os-api.herokuapp.com/api/',

  drawer: true,
  toolbarBackUrl: null,
  alert:{
    value: false,
    type: null,
    timeout: null,
    message: null,

    defaultTimeout: 6000
  },
  loader: {
    value: false,
    text: null
  }
}