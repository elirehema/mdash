const state = () => ({
  totals: {
    bills: 0,
    companies: 0,
    downlinks: 0,
    gateways: 0,
    meters: 0,
    paymentNotifications: 0,
    payments: 0,
    readings: 0,
    transactions: 0,
    usageTracks: 0,
    users: 0,
    purchases: 0,
    units: {}
  }
})

const mutations = {
  'GET_STATISTICS' (state) {
    state.showLoader = true
  },
  'GET_STATISTICS_FAILED' (state) {
    state.showLoader = false
  },
  'GET_STATISTICS_ERROR' (state) {
    state.showLoader = false
  },
  'GET_STATISTICS_SUCCESS' (state, payload) {
    state.showLoader = false
    state.totals = payload
  },

  'GET_UNITS' (state) {
    state.showLoader = true
  },
  'GET_UNITS_FAILED' (state) {
    state.showLoader = false
  },
  'GET_UNITS_ERROR' (state) {
    state.showLoader = false
  },
  'GET_UNITS_SUCCESS' (state, payload) {
    state.showLoader = false
    state.units = payload
  }
}

const actions = {
  async _fetchstatistics ({ commit }) {
    commit('GET_STATISTICS')
    await this.$api
      .$get('/statistics/entities')
      .then((response) => {
        commit('GET_STATISTICS_SUCCESS', response)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
        commit('GET_STATISTICS_ERROR')
      })
  },
  async _fetchstatisticalunits ({ commit }) {
    commit('GET_UNITS')
    await this.$api
      .$get('/units')
      .then((response) => {
        commit('GET_UNITS_SUCCESS', response)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
        commit('GET_UNITS_ERROR')
      })
  }
}

const getters = {
  totals: (state) => {
    return state.totals
  },
  units: (state) => {
    return state.units
  }
}

export default {
  namespaced: false,
  state,
  mutations,
  actions,
  getters
}
