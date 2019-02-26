// https://vuex.vuejs.org/en/state.html

export default {
  API_URL: 'http://127.0.0.1:8000/api/',

  drawer: true,
  toolbarBackUrl: null,
  alert:{
    value: false,
    type: null,
    timeout: null,
    message: null,

    defaultTimeout: 6000
  }
}