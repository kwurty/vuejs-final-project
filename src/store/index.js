import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ownedStocks: [],
    availableFunds: 10000,
    availableStocks: [
      {
        name: "AMD",
        symbol: "$AMD",
        price: 55
      },
      {
        name: "Telefonica Brasil S.A.",
        symbol: "$VIV",
        price: 20
      },
      {
        name: "Amyris, Inc.",
        symbol: "$AMRS",
        price: 5
      },
      {
        name: "PICO Holdings, Inc.",
        symbol: "$PICO",
        price: 15
      },
      {
        name: "Franklin FTSE Hong Kong ETF",
        symbol: "$FLHK",
        price: 30
      },
      {
        name: "Tilly's, Inc.",
        symbol: "$TLYS",
        price: 4
      },
      {
        name: "PIMCO Income Opportunity Fund",
        symbol: "$PKO",
        price: 21
      },
      {
        name: "Biogen Inc.",
        symbol: "$BIIB",
        price: 320
      }
    ]
},
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    listAvailableStocks(state) {
      return state.availableStocks;
    },
    listOwnedStocks(state) {
      return state.ownedStocks;
    },
    listAvailableFunds(state){
      return state.availableFunds;
    }
  }
})
