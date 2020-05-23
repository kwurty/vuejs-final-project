/* eslint-disable no-unused-vars */

export default {
  namespaced: true,
  state: {
    ownedStocks: [],
    savedOwnedStocks: [],
    availableFunds: 10000,
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
  sellStocks(state, payload) {
      if (isNaN(payload.stockInfo.quantity) || payload.quantity < 1) {
        alert('You must sell at least 1 stock');
        return;
      }
      
      console.dir(state);
      // find the stock in the list of available stocks to get the current price
      let findAvailableStock = payload.availableStocks.find(stock => stock.symbol === payload.stockInfo.symbol);
      let availableStockInfo = payload.availableStocks.indexOf(findAvailableStock);

      //adjust the current user stocks
      let stockOwned = state.ownedStocks.find(stock => stock.symbol === payload.stockInfo.symbol);
      let stockIndex = state.ownedStocks.indexOf(stockOwned);

      // check for cheaters
      if ((state.ownedStocks[stockIndex].quantity - (payload.stockInfo.quantity)) < 0) {
        alert('You cannot sell more stocks than you own!');
        return;
      }

      // state.ownedStocks[stockIndex].quantity -= 2;
      state.ownedStocks[stockIndex].quantity -= parseInt(payload.stockInfo.quantity);

      //adjust current funds

      state.availableFunds += (payload.availableStocks[availableStockInfo].price * parseInt(payload.stockInfo.quantity));

      if (state.ownedStocks[stockIndex].quantity === 0) {
        state.ownedStocks.splice(stockIndex, 1);
      }

      console.log(`Selling ${payload} at ${payload.availableStocks[availableStockInfo].price}`)
    }
  },

  actions: {
    purchaseStocks(context, payload) {
      context.commit('purchaseStocks', payload);
  },
  sellStocks(context, payload) {
      context.commit('sellStocks', {stockInfo: payload, availableStocks: context.rootGetters['AvailableStocks/listAvailableStocks']});
  }
},

getters: {
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
}