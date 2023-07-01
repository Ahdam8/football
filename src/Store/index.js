import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      cards: [],
    };
  },
  mutations: {
    SET_ITEM(state, data3) {
      state.cards = data3;
    },
  },
  actions: {
    // to add the cards from fitch
    addCards({ commit }, data3) {
      commit("SET_ITEM", data3);
      console.log(data3)
    },
  },
  getters: {
    getCards(state) {
      return state.cards;
    },
  },
});

