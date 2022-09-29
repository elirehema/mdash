const state = () => ({
    districts:[]
  });

  const mutations = {
    ["GET_DISTRICTS"](state) {
        state.showLoader = true;
    },
    ["GET_DISTRICTS_FAILED"](state) {
        state.showLoader = false;
    },
    ["GET_DISTRICTS_ERROR"](state) {
        state.showLoader = false;
    },
    ["GET_DISTRICTS_SUCCESS"](state, payload) {
        state.showLoader = false;
        state.districts = payload;
    },
  };

  const actions = {
    async _fetchdistricts({ commit }) {
        commit("GET_DISTRICTS");
        await this.$api
          .$get("/districts")
          .then((response) => {
            commit("GET_DISTRICTS_SUCCESS", response);
          })
          .catch((error) => {
            console.log(error);
            commit("GET_DISTRICTS_ERROR");
          });
      },
  };

  const getters = {
    districts:(state)=>{
        return state.districts;
    }
  };

  export default {
    namespaced: false,
    state,
    mutations,
    actions,
    getters,
  };
  