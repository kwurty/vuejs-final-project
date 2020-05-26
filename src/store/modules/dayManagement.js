const namespaced = true;

const state = {
    currentDay: 0
}
const mutations = {
    endDay(state) {
        // bump up the current day
        state.currentDay++;
      },
    setDay(state, payload){
        state.currentDay = payload;
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
          
        // call mutation to adjust prices. Mutation is in the AvailableStocks module
        context.commit('AvailableStocks/setPrice', null, { root: true })
    }
}

export default {
    namespaced,
    state,
    mutations,
    actions,
    getters
}