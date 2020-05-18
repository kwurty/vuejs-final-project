<template>

    <nav class="navbar is-primary" id="nav">
      <router-link to="/" class="navbar-item">Stock Trader</router-link> 
      <router-link to="/portfolio" class="navbar-item">Portfolio</router-link> 
      <router-link to="/stocks" class="navbar-item">Stocks</router-link>
      <div class="navbar-end">
      <router-link to="/" class="navbar-item">End Day</router-link>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Save & Load
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item">
            Save
          </a>
          <a class="navbar-item">
            Load
          </a>
        </div>
      </div>
      <div class="navbar-item">Funds:  </div>
      </div>
    </nav>

</template>

<script>
export default {

}
</script>

<style>

</style>