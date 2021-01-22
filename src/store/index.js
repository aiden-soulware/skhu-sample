import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allUsers: [
      {
        userId: "jun123",
        password: "123",
        name: "JJUN",
        address: "Seoul",
        src:
          "data:image/png;base64,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",
      },
      {
        userId: "jun12345",
        password: "456",
        name: "Jjin",
        address: "Berlin",
        src:
          "data:image/png;base64,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",
      },
    ],
  },
  getters: {
    //computed 역할을 한다
    allUsersCount: (state) => {
      return state.allUsers.length;
    },
    countOfSeoul: (state) => {
      let count = 0;
      state.allUsers.forEach((user) => {
        if (user.address === "Seoul") {
          count++;
        }
      });
      return count;
    },
    percentOfSeoul: (state, getters) => {
      return Math.round((getters.countOfSeoul / getters.allUsersCount) * 100);
    },
  },
  mutations: {//state를 변화 시킴
    addUsers: (state, payload) => {
      //payload 가져온 값을 넘겨줌
      state.allUsers.push(payload);
    },
  },
  actions: {//비즈니스로직이 들어 갈 수 있음 ex) password 검사 비동기 처리 같은 로직 처리 후 
    //commit 을 사용해 mutations에 전달
    addUsers: ({ commit }, payload) => {
      commit("addUsers",payload);
    },
  },
  modules: {},
});
