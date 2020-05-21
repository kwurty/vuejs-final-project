import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ownedStocks: [],
    savedData: [],
    savedOwnedStocks: [],
    availableFunds: 10000,
    currentDay: 1,
    previousDayStocks: [],
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
      // if purchase amount is < 1, reject
      if (isNaN(payload.quantity) || payload.quantity < 1) {
        alert('You must purchase at least 1 stock');
        return;
      }

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
      state.savedOwnedStocks = JSON.parse(JSON.stringify(state.ownedStocks));
    },
    loadStockGame(state) {
      state.ownedStocks = JSON.parse(JSON.stringify(state.savedOwnedStocks));
    },
    endDay(state) {
      // bump up the current day
      state.currentDay++;

      state.previousDayStocks = JSON.parse(JSON.stringify(state.availableStocks));

      // generate a random price change for each stock.
      state.availableStocks.forEach(stock => {
        let randomNumber = (Math.random() * ((stock.price / 10) - (stock.price / 100)) + (stock.price / 100));
        let randomMultipler = Math.random() < 0.5 ? 1 : -1;
        stock.price += (randomNumber * randomMultipler);
      })

      //
    },
    sellStocks(state, payload) {
      if (isNaN(payload.quantity) || payload.quantity < 1) {
        alert('You must sell at least 1 stock');
        return;
      }


      // find the stock in the list of available stocks to get the current price
      let findAvailableStock = state.availableStocks.find(stock => stock.symbol === payload.symbol);
      let availableStockInfo = state.availableStocks.indexOf(findAvailableStock);

      //adjust the current user stocks
      let stockOwned = state.ownedStocks.find(stock => stock.symbol === payload.symbol);
      let stockIndex = state.ownedStocks.indexOf(stockOwned);

      // check for cheaters
      if ((state.ownedStocks[stockIndex].quantity - (payload.quantity)) < 0) {
        alert('You cannot sell more stocks than you own!');
        return;
      }

      // state.ownedStocks[stockIndex].quantity -= 2;
      state.ownedStocks[stockIndex].quantity -= parseInt(payload.quantity);

      //adjust current funds

      state.availableFunds += (parseInt(state.availableStocks[availableStockInfo].price) * parseInt(payload.quantity));

      if (state.ownedStocks[stockIndex].quantity === 0) {
        state.ownedStocks.splice(stockIndex, 1);
      }
    }
  },
  actions: {
    purchaseStocks(context, payload) {
      context.commit('purchaseStocks', payload);
    },
    sellStocks(context, payload) {
      context.commit('sellStocks', payload);
    },
    saveStockGame(context) {
      context.commit('saveStockGame');
    },
    loadStockGame(context) {
      context.commit('loadStockGame');
    },
    endDay(context) {
      context.commit('endDay');
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
    },
    getCurrentDay(state) {
      return state.currentDay;
    }
  }
})
