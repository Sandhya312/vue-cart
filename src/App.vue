<template>
  <div id="app">
    <h1 class="app-h1">SHOOPING CART</h1>
    <div class="cart">
      <shopComp/>
    <paymentComp/>
    </div>
  </div>
</template>

<script>
import shopComp from './components/shopComp.vue';
import paymentComp from './components/paymentComp.vue';

export default {
  name: 'App',
  components: {
    shopComp,
    paymentComp,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #FFFFFF;
  height: 42rem; 
    width: 80%;

}
#app .app-h1{
  height: 10%;
    margin-top: 5%;
}
.cart{
  height: 80%;
    padding: 2%;
    display: flex;
    justify-content: center;

}
</style>
