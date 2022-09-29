const state = () => ({
  paymentnotifications: null
})

const mutations = {
  'GET_PAYMENT_NOTIFICATIONS' (state) {
    state.showLoader = true
  },
  'GET_PAYMENT_NOTIFICATIONS_FAILED' (state) {
    state.showLoader = false
  },
  'GET_PAYMENT_NOTIFICATIONS_ERROR' (state) {
    state.showLoader = false
  },
  'GET_PAYMENT_NOTIFICATIONS_SUCCESS' (state, payload) {
    state.showLoader = false
    state.paymentnotifications = payload
  }
}

const actions = {
  async _fetchtpaymentsnotifications ({ commit }) {
    commit('GET_PAYMENT_NOTIFICATIONS')
    await this.$api
      .$get('/payments/notifications')
      .then((response) => {
        commit('GET_PAYMENT_NOTIFICATIONS_SUCCESS', response)
      })
      .catch(() => {
        commit('GET_PAYMENT_NOTIFICATIONS_ERROR')
      })
  }
}

const getters = {
  paymentnotifications: (state) => {
    return state.paymentnotifications
  }
}

export default {
  namespaced: false,
  state,
  mutations,
  actions,
  getters
}
