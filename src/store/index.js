import Vue from 'vue'
import Vuex from 'vuex'

import menus from './modules/menus'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    menus
  }
})
