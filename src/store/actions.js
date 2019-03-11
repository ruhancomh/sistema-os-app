// https://vuex.vuejs.org/en/actions.html

export default {
  USER_LOGIN: (context, payload) => {
    context.commit('SET_ACCESS_TOKEN', {
      access_token: payload.access_token
    })

    context.commit('SET_USER', {
      user: payload.user
    })
  },

  USER_LOGOUT: (context) => {
    context.commit('SET_ACCESS_TOKEN', {
      access_token: null
    })

    context.commit('SET_USER', {
      user: null
    })
  }
}