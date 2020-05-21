<template>
  <div class="container">
    <div class="title" v-if="listOwnedStocks.length < 1">Portfolio Empty! Go make some purchases.</div>
    <div class="card is-one-quarter" v-for="(stock, index) in listOwnedStocks" :key="stock.symbol">
      <div class="card-header">
        <div class="card-header-title">{{stock.name}}</div>
      </div>
      <div class="card-content is-centered">
        {{stock.symbol}} - {{stock.quantity}}
        <div class="field has-addons">
          <div class="control">
            <input class="input" type="number" placeholder="0" min="0" v-model="quantity[index]" />
          </div>
          <div class="control">
            <a
              class="button is-danger"
              @click="sellStocks(
                {
                    symbol: stock.symbol,
                    quantity: quantity[index]
                }
            );
            quantity[index] = undefined;
            "
            >Sell</a>
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
    return {
      quantity: []
    };
  },
  computed: {
    ...mapGetters(["listOwnedStocks", "listOwnedStocks"])
  },
  methods: {
    ...mapActions(["sellStocks"])
  }
};
</script>

<style scoped>
</style=>