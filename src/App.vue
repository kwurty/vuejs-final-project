<template>
  <div id="app" class="container">
    <app-nav></app-nav>
    <router-view/>
  </div>
</template>

<style>

</style>

<script>
import appNav from './components/Nav.vue';

export default {
  components: {
    appNav
  }
}
</script>