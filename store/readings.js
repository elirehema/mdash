const state = () => ({
  rreadings: null,
  readings: null
})

const mutations = {
  'GET_RECENT_READINGS' (state) {
    state.showLoader = true
  },
  'GET_RECENT_READINGS_FAILED' (state) {
    state.showLoader = false
  },
  'GET_RECENT_READINGS_ERROR' (state) {
    state.showLoader = false
  },
  'GET_RECENT_READINGS_SUCCESS' (state, payload) {
    state.showLoader = false
    state.rreadings = payload
  },
  'GET_ALL_READINGS' (state) {
    state.showLoader = true
  },
  'GET_ALL_READINGS_FAILED' (state) {
    state.showLoader = false
  },
  'GET_ALL_READINGS_ERROR' (state) {
    state.showLoader = false
  },
  'GET_ALL_READINGS_SUCCESS' (state, payload) {
    state.showLoader = false
    state.readings = payload
  }
}

const actions = {
  async _fetchrecentreadings ({ commit }) {
    commit('GET_RECENT_READINGS')
    await this.$api
      .$get('/readings/recent')
      .then((response) => {
        commit('GET_RECENT_READINGS_SUCCESS', response)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
        commit('GET_RECENT_READINGS_ERROR')
      })
  },
  async _fetchreadings ({ commit }) {
    commit('GET_ALL_READINGS')
    await this.$api
      .$get('/readings')
      .then((response) => {
        commit('GET_ALL_READINGS_SUCCESS', response)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
        commit('GET_ALL_READINGS_ERROR')
      })
  }
}

const getters = {
  recentreadings: (state) => {
    return state.rreadings
  },
  readings: (state) => {
    return state.readings
  }
}

export default {
  namespaced: false,
  state,
  mutations,
  actions,
  getters
}
