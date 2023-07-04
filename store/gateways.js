const state = () => ({
  gateways: null
})

const mutations = {
  'GET_GATEWAYS' (state) {
    state.showLoader = true
  },
  'GET_GATEWAYS_FAILED' (state) {
    state.showLoader = false
  },
  'GET_GATEWAYS_ERROR' (state) {
    state.showLoader = false
  },
  'GET_GATEWAYS_SUCCESS' (state, payload) {
    state.showLoader = false
    state.gateways = payload
  }
}

const actions = {
  async _fetchgateways ({ commit }, requestbody) {
    commit('GET_GATEWAYS')
    await this.$api
      .$get('/gateways', requestbody)
      .then((response) => {
        commit('GET_GATEWAYS_SUCCESS', response)
      })
      .catch(() => {
        commit('GET_GATEWAYS_ERROR')
      })
  },
  async _addnewgateway ({ commit }, requestbody) {
    await this.$api
      .$post('/gateways', requestbody)
      .then(() => {
        setTimeout(() => {
          dispatch('_fetchgateways', null, { root: true })
        }, 5000)
      })
      .catch(() => {
        commit('GET_GATEWAYS_ERROR')
      })
  },
  async _updategateway ({ commit }, data) {
    await this.$api
      .$put(`/gateways/${data.id}`, data.payload)
      .then(() => {
        setTimeout(() => {
          dispatch('_fetchgateways', null, { root: true })
        }, 5000)
      })
      .catch(() => {
        commit('GET_GATEWAYS_ERROR')
      })
  }
}

const getters = {
  gateways: (state) => {
    return state.gateways
  }
}

export default {
  namespaced: false,
  state,
  mutations,
  actions,
  getters
}
