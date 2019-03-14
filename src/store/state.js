// https://vuex.vuejs.org/en/state.html

export default {
  // API_URL: 'lol',
  //API_URL: 'https://clean-sistema-os-api.herokuapp.com/api/',

  API_URL: process.env.VUE_APP_API_URL,

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
  },

  access_token: null,
  user: null
}