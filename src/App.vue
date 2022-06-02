<template>
  <div>
    <exchange-navbar 
    v-bind:title="brandName"
    v-bind:menuitems="menus"
    />
    <exchange-hero />
    <router-view />
  </div>
</template>

<script>
import ExchangeHero from './components/ExchangeHero.vue'
import ExchangeNavbar from './components/ExchangeNavbar.vue'

export default {
  name: 'APP',
  components: {
    ExchangeNavbar,
    ExchangeHero
  },
  data(){
    return{
      brandName: "Exchange Hub",
      menus: [
        {'text':'Home', link:'/'},
        {'text':'About', link:'/about'},
        {'text':'FAQ', link:'/faq'},
        {'text':'Login', link:'/login'},
        {'text':'Register', link:'/register'}
      ],
    }
  }
}
</script>

<style lang="scss">
  @import 'assets/styles/variables.scss';
  @import '~bulma/bulma.sass';
  @import 'assets/styles/main.scss';

</style>