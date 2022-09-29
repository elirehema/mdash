const state = () => ({
  companies: null
})

const mutations = {
  'GET_COMPANIES' (state) {
    state.showLoader = true
  },
  'GET_COMPANIES_FAILED' (state) {
    state.showLoader = false
  },
  'GET_COMPANIES_ERROR' (state) {
    state.showLoader = false
  },
  'GET_COMPANIES_SUCCESS' (state, payload) {
    state.showLoader = false
    state.companies = payload
  }
}

const actions = {
  async _fetchcompanies ({ commit }) {
    commit('GET_COMPANIES')
    await this.$api
      .$get('/companies')
      .then((response) => {
        commit('GET_COMPANIES_SUCCESS', response)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
        commit('GET_COMPANIES_ERROR')
      })
  },
  async _registercompany ({ dispatch }, requestbody) {
    await this.$api
      .$post('/companies', requestbody)
      .then(() => {
        dispatch('_fetchcompanies')
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
  }
}

const getters = {
  companies: (state) => {
    return state.companies
  }
}

export default {
  namespaced: false,
  state,
  mutations,
  actions,
  getters
}
