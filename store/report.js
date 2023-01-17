const state = () => ({

})

const mutations = {}

const actions = {
  async _exportreport ({ commit }, report) {
    await this.$api
      .$get(`/report/${report}`)
      .then((response) => {
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
  }
}

const getters = {}

export default {
  namespaced: false,
  state,
  mutations,
  actions,
  getters
}
