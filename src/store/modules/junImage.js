const state = {
  items: [],
};
const getters = {
  
};
const actions = {
  //비즈니스로직이 들어 갈 수 있음 ex) password 검사 비동기 처리 같은 로직 처리 후
  //commit 을 사용해 mutations에 전달
  getImageItem: ({ commit }, payload) => {
    commit("imageItem", payload);
  },
};

const mutations = {
  //state를 변화 시킴
  imageItem: (state, payload) => {
    //payload 가져온 값을 넘겨줌
    state.items.push(payload);
    console.log(state.items);
  },
};

export default {
  namespaced: true,
  getters,
  state,
  actions,
  mutations,
};
