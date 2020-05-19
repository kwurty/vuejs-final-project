import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ownedStocks: [],
    savedData: [],
    savedOwnedStocks: [],
    availableFunds: 10000,
    currentDay: 0,
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
    purchaseStocks(state, payload) {
      // check if the stock is already owned
      let stockOwned = state.ownedStocks.find(stock => stock.symbol === payload.symbol);

      //if owned, update the quantity using the index found above, otherwise push the
      // new stock into the owned stock array
      if ((state.availableFunds - (payload.quantity * payload.price)) < 0) {
        alert('You do not have enough funds to perform this action!');
        return;
      }
      if (stockOwned) {
        let stockIndex = state.ownedStocks.indexOf(stockOwned);
        state.ownedStocks[stockIndex].quantity += parseInt(payload.quantity);
      } else {
        state.ownedStocks.push({
          name: payload.name,
          symbol: payload.symbol,
          quantity: parseInt(payload.quantity)
        });
      }
      state.availableFunds -= (payload.quantity * payload.price);
      payload.quantity = 0;
    },
    saveStockGame(state) {
      state.savedOwnedStocks = [];
      state.savedOwnedStocks = JSON.parse(JSON.stringify(state.ownedStocks));
    },
    loadStockGame(state) {
      state.ownedStocks = [];
      state.ownedStocks = JSON.parse(JSON.stringify(state.savedOwnedStocks));
    },
    endDay(state) {
      // bump up the current day
      state.currentDay++;

      // generate a random price change for each stock.
      state.availableStocks.forEach(stock => {
        let randomNumber = Math.floor(Math.random() * ((stock.price/10) - (stock.price / 100)) + (stock.price / 100));
        let randomMultipler = Math.random() < 0.5 ? 1 : -1;
        state.price =  state.price + (randomNumber * randomMultipler);
      })

      //
    }
  },
  actions: {
    purchaseStocks(context, payload) {
      context.commit('purchaseStocks', payload);
    },
    saveStockGame(context) {
      context.commit('saveStockGame');
    },
    loadStockGame(context) {
      context.commit('loadStockGame');
    }
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
    listAvailableFunds(state) {
      let moneyFormat = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      });
      return moneyFormat.format(state.availableFunds);
    }
  }
})
