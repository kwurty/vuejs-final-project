const namespaced = true;

const state = {
    currentDay: 0
}
const mutations = {
    endDay(state, payload) {
        // bump up the current day
        state.currentDay++;
  
        // generate a random price change for each stock.
        payload.availableStocks.forEach(stock => {
          let randomNumber = Math.random() * ((stock.price/10) - (stock.price / 100)) + (stock.price / 100);
          let randomMultipler = Math.random() < 0.5 ? 1 : -1;
          stock.price =  stock.price + (randomNumber * randomMultipler);
        })
  
        //
      }
}

const getters =  {
    getCurrentDay() {
        return state.currentDay + 1;
    }
}

const actions =  {
    endDay(context) {
        context.commit('endDay', {availableStocks: context.rootGetters['AvailableStocks/listAvailableStocks']});
    }
}

export default {
    namespaced,
    state,
    mutations,
    actions,
    getters
}