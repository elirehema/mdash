const state = () => ({
  settings: null
})

const mutations = {
  'GET_SETTINGS' (state) {
    state.showLoader = true
  },
  'GET_SETTINGS_FAILED' (state) {
    state.showLoader = false
  },
  'GET_SETTINGS_ERROR' (state) {
    state.showLoader = false
  },
  'GET_SETTINGS_SUCCESS' (state, payload) {
    state.showLoader = false
    state.settings = payload
  }
}

const actions = {
  async _fetchsettings ({ commit }) {
    commit('GET_SETTINGS')
    await this.$api
      .$get('/configurations')
      .then((response) => {
        commit('GET_SETTINGS_SUCCESS', response)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
        commit('GET_SETTINGS_ERROR')
      })
  },
  async _updatesettings ({ dispatch }, payload) {
    await this.$api
      .$put('/configurations', payload)
      .then(() => {
        dispatch('_fetchsettings')
      })
      .catch(() => {
      })
  }
}

const getters = {
  settings: (state) => {
    return state.settings == null ? state.settings : state.settings[0]
  }
}

export default {
  namespaced: false,
  state,
  mutations,
  actions,
  getters
}
