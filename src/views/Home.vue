<template>
  <div class="home">
    <h1 class="title is-1">Stock Trading</h1>
    <p>Head over to the Stocks Tab to buy some Stocks</p>
    <p>Manage your purchased stocks in the Portfolio tab</p>
    <p>Prices will change each day - click on the End Day to finish your day</p>
    <hr />
    <h2 class="title is-3">Your Funds: {{ listAvailableFunds }}</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(
      {
        listAvailableFunds: 'UserPortfolio/listAvailableFunds'
      })
  }
};
</script>
