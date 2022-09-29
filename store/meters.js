const state = () => ({
  meters: null
})

const mutations = {
  'GET_METERS' (state) {
    state.showLoader = true
  },
  'GET_METERS_FAILED' (state) {
    state.showLoader = false
  },
  'GET_METERS_ERROR' (state) {
    state.showLoader = false
  },
  'GET_METERS_SUCCESS' (state, payload) {
    state.showLoader = false
    state.meters = payload
  }
}

const actions = {
  async _fetchmeters ({ commit }) {
    commit('GET_METERS')
    await this.$api
      .$get('/meters')
      .then((response) => {
        commit('GET_METERS_SUCCESS', response)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
        commit('GET_METERS_ERROR')
      })
  }
}

const getters = {
  meters: (state) => {
    return state.meters
  }
}

export default {
  namespaced: false,
  state,
  mutations,
  actions,
  getters
}
