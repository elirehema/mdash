const state = () => ({
  tracks: null,
  rtracks: null
})

const mutations = {
  'GET_RECENT_TRACKS' (state) {
    state.showLoader = true
  },
  'GET_RECENT_TRACKS_FAILED' (state) {
    state.showLoader = false
  },
  'GET_RECENT_TRACKS_ERROR' (state) {
    state.showLoader = false
  },
  'GET_RECENT_TRACKS_SUCCESS' (state, payload) {
    state.showLoader = false
    state.rtracks = payload
  },
  'GET_ALL_TRACKS' (state) {
    state.showLoader = true
  },
  'GET_ALL_TRACKS_FAILED' (state) {
    state.showLoader = false
  },
  'GET_ALL_TRACKS_ERROR' (state) {
    state.showLoader = false
  },
  'GET_ALL_TRACKS_SUCCESS' (state, payload) {
    state.showLoader = false
    state.tracks = payload
  }
}

const actions = {
  async _fetchrecentusagetracks ({ commit }) {
    commit('GET_RECENT_TRACKS')
    await this.$api
      .$get('/tracks/recent')
      .then((response) => {
        commit('GET_RECENT_TRACKS_SUCCESS', response)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
        commit('GET_RECENT_TRACKS_ERROR')
      })
  },
  async _fetchusagetracks ({ commit }) {
    commit('GET_ALL_TRACKS')
    await this.$api
      .$get('/tracks')
      .then((response) => {
        commit('GET_ALL_TRACKS_SUCCESS', response)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
        commit('GET_ALL_TRACKS_ERROR')
      })
  }
}

const getters = {
  recenttracks: (state) => {
    return state.rtracks
  },
  tracks: (state) => {
    return state.tracks
  }
}

export default {
  namespaced: false,
  state,
  mutations,
  actions,
  getters
}
