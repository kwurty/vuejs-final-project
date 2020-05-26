
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
    context.commit('UserPortfolio/setFunds', state.savedData.fundsAvailable, { root : true });
    context.commit('UserPortfolio/setStocks', state.savedData.ownedStocks, { root: true });
    context.commit('AvailableStocks/setStocks', state.savedData.availableStocks, {root: true});
    context.commit('DayManagement/setDay', state.savedData.currentDay - 1, {root : true});
  }
}

export default {
  namespaced,
  state,
  actions,
  mutations
}