
const namespaced = true;

const state = {
    savedData: []
}

const mutations = {
    saveStockGame(state) {

        // state.savedData.ownedStocks = [];
        // state.savedData.ownedStocks = JSON.parse(JSON.stringify(state.ownedStocks));
      },
      loadStockGame(state) {
        state.ownedStocks = [];
        state.ownedStocks = JSON.parse(JSON.stringify(state.savedOwnedStocks));
      }
}

const actions = {
    saveStockGame(context) {
        context.commit('saveStockGame', {
          ownedStocks: context.rootGetters['UserPortfolio/listOwnedStocks'],
          availableStocks: context.rootGetters['AvailableStocks/listAvailableStocks']
        });
      },
      loadStockGame(context) {
        context.commit('loadStockGame');
      }
}

export default {
    namespaced,
    state,
    actions,
    mutations
}