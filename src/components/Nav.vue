<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item">Stock Trader</router-link>
      <router-link to="/portfolio" class="navbar-item">Portfolio</router-link>
      <router-link to="/stocks" class="navbar-item">Stocks</router-link>
    </div>
    <div class="navbar-end">
      <a class="navbar-item" @click="endDay()">End Day</a>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">Save & Load</a>
        <div class="navbar-dropdown">
          <a class="navbar-item" @click="saveStockGame()">Save</a>
          <a class="navbar-item" @click="loadStockGame()">Load</a>
        </div>
      </div>
      <div class="navbar-item">Funds: {{ fundsAvailable }}</div>
      <div class="navbar-item">Day: {{ currentDay }}</div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
export default {
  computed: {
    fundsAvailable() {
      return this.$store.getters.listAvailableFunds;
    },
    currentDay() {
      return this.$store.getters.getCurrentDay;
    }
  },
  methods: {
    ...mapActions(["loadStockGame", "saveStockGame", "endDay"])
  }
};
</script>

<style>
</style>