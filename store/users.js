const state = () => ({
  users: null
})

const mutations = {
  'GET_USERS' (state) {
    state.showLoader = true
  },
  'GET_USERS_FAILED' (state) {
    state.showLoader = false
  },
  'GET_USERS_ERROR' (state) {
    state.showLoader = false
  },
  'GET_USERS_SUCCESS' (state, payload) {
    state.showLoader = false
    state.users = payload
  }
}

const actions = {
  async _fetchusers ({ commit }, requestbody) {
    commit('GET_USERS')
    await this.$api
      .$get('/users/', requestbody)
      .then((response) => {
        commit('GET_USERS_SUCCESS', response)
      })
      .catch(() => {
        commit('GET_USERS_ERROR')
      })
  },
  async _registeruser ({ dispatch }, payload) {
    await this.$api
      .$post('/users/register', payload)
      .then(() => {
        setTimeout(() => {
          dispatch('_fetchusers', null, { root: true })
        }, 5000)
      })
      .catch(() => {
        setTimeout(() => {
          dispatch('_fetchusers', null, { root: true })
        }, 5000)
      })
  },
  async _updateuser ({ dispatch }, data) {
    await this.$api
      .$put(`/users/${data.id}`, data.payload)
      .then(() => {
        setTimeout(() => {
          dispatch('_fetchusers', null, { root: true })
        }, 5000)
      })
      .catch(() => {
        setTimeout(() => {
          dispatch('_fetchusers', null, { root: true })
        }, 5000)
      })
  }
}

const getters = {
  users: (state) => {
    return state.users
  }
}

export default {
  namespaced: false,
  state,
  mutations,
  actions,
  getters
}
