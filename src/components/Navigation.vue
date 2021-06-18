<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light mb-4">
    <router-link class="navbar-brand" to="/" >
        <img src="@/assets/cart.jpg" width="30" height="30" class="d-inline-block align-top" alt="">
    Home
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item nav-link">
          <router-link class="text-dark" to="/products"> Products</router-link>
        </li>
        <li class="nav-item nav-link">
          <router-link class="ml-1 text-dark" to="/cart"> Cart </router-link>
        </li>
        <li class="nav-item nav-link">
          <router-link class="text-align-center text-dark" to="/cart"> Total Items: {{ total }}</router-link>
         </li>
      </ul>
    </div>
    <li class="nav-item nav-link my-2 my-lg-0">
          <router-link class="ml-1 text-dark" to="/admin"> Admin</router-link>
        </li>
  </nav>
</template>

<script>

import {mapState, mapGetters,} from 'vuex'

export default {
    
    computed:{

        ...mapGetters('cart',{
           
            total:'productsTotal'
        }),
        ...mapState('cart',{
            checkoutStatus: state => state.checkoutStatus
        })
     },

}


</script>

<style scoped>

.nav-links{
 display: flex;
 padding-right: 20px;
 font-size: 20px;
 color: rgb(54, 5, 54);
 font-weight: bold;
 align-items: center;
}
.links{
    padding-right: 20px;
    list-style: none;

}
.links:hover{
    text-decoration: underline;
}

</style>