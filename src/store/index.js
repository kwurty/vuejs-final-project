import Vue from 'vue'
import Vuex from 'vuex'
import AvailableStocks from './modules/availableStocks.js'
import DayManagement from './modules/dayManagement.js'
import SaveState from './modules/saveState.js'
import UserPortfolio from './modules/userPortfolio.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
  },
  mutations: {

  },
  actions: {

  },
  getters: {

  },
  modules: {
    DayManagement,
    AvailableStocks,
    SaveState,
    UserPortfolio
  }
})
