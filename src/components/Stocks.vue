<template>
  <div class="container">
    <div class="card" v-for="stock in listAvailableStocks" :key="stock.symbol">
      <div class="card-header">
        <div class="card-header-title">{{stock.name}}</div>
      </div>
      <div class="card-content is-centered">
        {{stock.symbol}} - ${{ stock.price.toFixed(2) }}
        <div class="field has-addons">
          <div class="control">
            <input
              class="input"
              type="number"
              placeholder="0"
              v-model="stock.quantity"
              min="0"
              default="undefined"
            />
          </div>
          <div class="control">
            <a
              class="button is-primary"
              @click="purchaseStocks(
                {
                    name: stock.name,
                    symbol: stock.symbol,
                    quantity: stock.quantity,
                    price: stock.price
                }
            );
                stock.quantity = undefined;
            "
            >Buy</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(
      {
        listAvailableStocks: 'AvailableStocks/listAvailableStocks'
      })
  },
  methods: {
    ...mapActions({
      purchaseStocks: 'UserPortfolio/purchaseStocks'
  })
  }
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 2fr));
  grid-gap: 0.5em;
}
input {
  justify-content: center;
}
</style=>