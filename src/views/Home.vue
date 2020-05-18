<template>
  <div class="home">
    <h1 class="title is-1">Trade or View your Portfolio</h1>
    <p>You may Save & Load your Data</p>
    <p>Click on 'End Day' to begin a new day!</p>
    <hr>
    <h2 class="title is-3">Your Funds: ${{ listAvailableFunds }}</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'listAvailableFunds'
    ])
  }
}
</script>
