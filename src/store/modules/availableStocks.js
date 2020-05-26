const namespaced = true;

const state = {
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
};

const getters = {
    listAvailableStocks(state) {
        return state.availableStocks;
      }
}

// generate a random price change for each stock.
const mutations = {
  setPrice(state) {
    state.availableStocks.forEach(stock => {
      let randomNumber = Math.random() * ((stock.price/10) - (stock.price / 100)) + (stock.price / 100);
      let randomMultipler = Math.random() < 0.5 ? 1 : -1;
      stock.price =  stock.price + (randomNumber * randomMultipler);
    })
  },

  setStocks(state, payload){
    state.availableStocks = payload;
  }
}

export default {
    namespaced,
    state,
    mutations,
    getters
}