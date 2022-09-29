const state = () => ({
  payments: null
})

const mutations = {
  'GET_PAYMENTS' (state) {
    state.showLoader = true
  },
  'GET_PAYMENTS_FAILED' (state) {
    state.showLoader = false
  },
  'GET_PAYMENTS_ERROR' (state) {
    state.showLoader = false
  },
  'GET_PAYMENTS_SUCCESS' (state, payload) {
    state.showLoader = false
    state.payments = payload
  }
}

const actions = {
  async _fetchtpayments ({ commit }) {
    commit('GET_PAYMENTS')
    await this.$api
      .$get('/payments')
      .then((response) => {
        commit('GET_PAYMENTS_SUCCESS', response)
      })
      .catch(() => {
        commit('GET_PAYMENTS_ERROR')
      })
  }
}

const getters = {
  payments: (state) => {
    return state.payments
  }
}

export default {
  namespaced: false,
  state,
  mutations,
  actions,
  getters
}
