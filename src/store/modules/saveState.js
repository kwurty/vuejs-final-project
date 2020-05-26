
const namespaced = true;

const state = {
  savedData: []
}

const mutations = {
  saveStockGame(state, payload) {
    console.log(payload)
    let tempState = {
      ownedStocks: payload.ownedStocks,
      availableStocks: payload.availableStocks,
      fundsAvailable: payload.fundsAvailable,
      currentDay: payload.currentDay
    }

    state.savedData = JSON.parse(JSON.stringify(tempState));

  },
  loadStockGame(state) {
    let tempState = JSON.parse(JSON.stringify(state));
    this.state.DayManagement.currentday = tempState.savedData.currentDay;
    this.state.UserPortfolio.ownedStocks = tempState.savedData.ownedStocks;
    this.state.AvailableStocks.availableStocks = tempState.savedData.availableStocks;
    this.state.UserPortfolio.fundsAvailable = tempState.savedData.fundsAvailable;
  }
}

const actions = {
  saveStockGame(context) {
    console.dir(context);
    context.commit('saveStockGame', {
      ownedStocks: context.rootGetters['UserPortfolio/listOwnedStocks'],
      availableStocks: context.rootGetters['AvailableStocks/listAvailableStocks'],
      fundsAvailable: context.rootState.UserPortfolio.availableFunds,
      currentDay: context.rootGetters['DayManagement/getCurrentDay']
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