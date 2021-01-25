import Vue from "vue";
import Vuex from "vuex";
import iUsers from './modules/iUsers'
import jUsers from './modules/jUsers'
import junImage from './modules/junImage'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    iUsers,
    jUsers,
    junImage,
  }
});
