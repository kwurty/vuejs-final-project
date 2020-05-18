<template>
    <div class="container">
        <div class="list-item" v-for="stock in listOwnedStocks" :key="stock.symbol">
            
        </div>
    </div>    
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data() { 
        return {
        }
    },
    computed: {
        ...mapGetters([
            'listOwnedStocks'
        ])
    }
}
</script>

<style scoped>

</style=>