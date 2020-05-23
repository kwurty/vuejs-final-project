<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item">Stock Trader</router-link>
      <router-link to="/portfolio" class="navbar-item">Portfolio</router-link>
      <router-link to="/stocks" class="navbar-item">Stocks</router-link>
    </div>
    <div class="navbar-end">
      <a class="navbar-item" @click="endDay()">End Day</a>
      <div class="navbar-item">Day: {{ currentDay }}</div>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">Save & Load</a>
        <div class="navbar-dropdown">
          <a class="navbar-item" @click="saveStockGame()">Save</a>
          <a class="navbar-item" @click="loadStockGame()">Load</a>
        </div>
      </div>
      <div class="navbar-item">Funds: {{ fundsAvailable }}</div>
    </div>
  </nav>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  computed: {

    ...mapGetters({
      currentDay: 'DayManagement/getCurrentDay',
      fundsAvailable: 'UserPortfolio/listAvailableFunds'
    })
  },
  methods: {

    ...mapActions({
      loadStockGame: 'SaveState/loadStockGame',
      saveStockGame: 'SaveState/saveStockGame',
      endDay: 'DayManagement/endDay'
    })
  }
};
</script>

<style>
</style>