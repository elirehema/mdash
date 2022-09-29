const state = () => ({
  tariffs: null
})

const mutations = {
  'GET_TARIFFS' (state) {
    state.showLoader = true
  },
  'GET_TARIFFS_FAILED' (state) {
    state.showLoader = false
  },
  'GET_TARIFFS_ERROR' (state) {
    state.showLoader = false
  },
  'GET_TARIFFS_SUCCESS' (state, payload) {
    state.showLoader = false
    state.tariffs = payload
  }
}

const actions = {
  async _fetchtariffs ({ commit }, requestbody) {
    commit('GET_TARIFFS')
    await this.$api
      .$get('/tariffs', requestbody)
      .then((response) => {
        commit('GET_TARIFFS_SUCCESS', response)
      })
      .catch(() => {
        commit('GET_TARIFFS_ERROR')
      })
  },
  async _activatetariff ({ dispatch }, tariffId) {
    await this.$api
      .$put(`/tariffs/${tariffId}/activate`)
      .then(() => {
        dispatch('_fetchtariffs')
      })
      .catch(() => {
      })
  }
}

const getters = {
  tariffs: (state) => {
    return state.tariffs
  }
}

export default {
  namespaced: false,
  state,
  mutations,
  actions,
  getters
}
