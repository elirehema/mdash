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
  },
  async _addnewmeter ({ dispatch }, payload) {
    await this.$api
      .$post('/meters', payload)
      .then((response) => {
        dispatch('_fetchmeters', null, { root: true })
      })
  },
  async _updatemeter ({ dispatch }, data) {
    await this.$api
      .$put(`/meters/${data.id}`, data.payload)
      .then((response) => {
        dispatch('_fetchmeters', null, { root: true })
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
