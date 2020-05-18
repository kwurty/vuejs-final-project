<template>
    <div class="container">
            <div class="card is-one-quarter" v-for="stock in listAvailableStocks" :key="stock.symbol">
                <div class="card-header">
                    <div class="card-header-title">
                        {{stock.name}}
                    </div>
                </div>
                <div class="card-content is-centered">
                    {{stock.symbol}} - ${{ stock.price }}

                    <div class="field has-addons">
                    <div class="control">
                        <input class="input" type="number" placeholder="0">
                    </div>
                    <div class="control">
                        <a class="button is-primary">
                        Buy
                        </a>
                    </div>
                    </div>
                </div>

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
            'listAvailableStocks'
        ])
    }
}
</script>

<style scoped>
    .container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
        grid-gap: 0.5em;
    }
    input {
        justify-content: center;
    }
</style=>