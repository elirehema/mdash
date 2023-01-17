const state = () => ({
  showLoader: Boolean,
  profile: {},
  account: {},
  tenant: ''
})

const mutations = {
  'AUTHENTICATE' (state) {
    state.showLoader = true
  },
  'AUTHENTICATE_FAILED' (state) {
    state.showLoader = false
  },
  'AUTHENTICATE_ERROR' (state) {
    state.showLoader = false
  },
  'AUTHENTICATE_SUCCESS' (state, payload) {
    state.showLoader = false
    state.profile = payload
    window.localStorage.setItem('userId', payload.id)
    window.localStorage.setItem('accessToken', payload.accessToken)
    this.$router.push('/')
  },
  'GET_ACCOUNT' (state) {
    state.showLoader = true
  },
  'GET_ACCOUNT_FAILED' (state) {
    state.showLoader = false
  },
  'GET_ACCOUNT_ERROR' (state) {
    state.showLoader = false
  },
  'GET_ACCOUNT_SUCCESS' (state, payload) {
    state.showLoader = false
    state.account = payload
  }

}
const actions = {
  async _authenticate ({ commit }, requestbody) {
    commit('AUTHENTICATE')
    await this.$api
      .$post('/signin', requestbody)
      .then((response) => {
        commit('AUTHENTICATE_SUCCESS', response)
        this.$toast.success(`Welcome ${response.name}`)
      })
      .catch(() => {
        commit('AUTHENTICATE_ERROR')
      })
  },
  async _fetchuseraccount ({ commit }) {
    const accountId = localStorage.getItem('userId')
    commit('GET_ACCOUNT')
    await this.$api
      .$get(`/users/${accountId}`)
      .then((response) => {
        commit('GET_ACCOUNT_SUCCESS', response)
      })
      .catch((_error) => {
        commit('GET_ACCOUNT_ERROR')
      })
  },

  async _logoutsession ({ }) {
    //window.localStorage.clear()
    //sessionStorage.clear()
    //this.$router.push('/signin')
  }
}
const getters = {
  accessToken (state) {
    return window.localStorage.getItem('accessToken')
  },
  profile (state) {
    return state.profile
  },
  isAuthenticated (state) {
    return window.localStorage.getItem('accessToken') != null
  },
  account (state) {
    return state.account
  },
  isadmin (state) {
    return (state.account.role === 'ADMIN')
  },
  companyId (state) {
    return state.account.companyId
  }
}

export default {
  namespaced: false,
  state,
  mutations,
  actions,
  getters
}
