<template>
  <div id="app">
    <Navigation/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import ProductList from './components/ProductList'
import ShoppingCart from './components/ShoppingCart'
import Admin from './components/Admin'
import Modal from './components/Modal'
import HomePage from './components/HomePage.vue';

export default {
  name: 'App',
  components: {
    ProductList,
    ShoppingCart,
    Navigation,
    HomePage,
    Admin,
    Modal
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  
}
</style>
