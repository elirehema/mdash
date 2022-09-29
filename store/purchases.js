const state = () => ({
  purchases: null
})

const mutations = {
  'GET_PURCHASES' (state) {
    state.showLoader = true
  },
  'GET_PURCHASES_FAILED' (state) {
    state.showLoader = false
  },
  'GET_PURCHASES_ERROR' (state) {
    state.showLoader = false
  },
  'GET_PURCHASES_SUCCESS' (state, payload) {
    state.showLoader = false
    state.purchases = payload
  }
}

const actions = {
  async _fetchcreditpurchases ({ commit }) {
    commit('GET_PURCHASES')
    await this.$api
      .$get('/purchases')
      .then((response) => {
        commit('GET_PURCHASES_SUCCESS', response)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
        commit('GET_PURCHASES_ERROR')
      })
  }
}

const getters = {
  purchases: (state) => {
    return state.purchases
  }
}

export default {
  namespaced: false,
  state,
  mutations,
  actions,
  getters
}
