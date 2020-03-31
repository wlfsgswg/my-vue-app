import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    add(state, n) {
      // 变更状态
      state.count = state.count + n;
    },
    min(state, n) {
      // 变更状态
      state.count = state.count - n;
    }
  }
});

export { store };
