<template>
  <div>
    <exchange-list
    :exchanges="exchanges"
    />
    <exchange-pagination />
  </div>
</template>

<script>
import ExchangeList from '../components/ExchangeList.vue'
import ExchangePagination from '../components/ExchangePagination.vue'

export default {
  components: {
    ExchangeList,
    ExchangePagination,
  },
  computed:{
    exchanges(){
      return this.$store.state.exchange.exchanges;
    }
  },
  created(){
    this.$store.dispatch("exchange/getExchanges");
  }
}
</script>
