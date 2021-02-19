<template>
    <nav id="nav">
        <ul class="nav-links">
            <router-link to="/" class="links">
                Products
            </router-link>
            <router-link to="/cart" class="links">
                Cart
            </router-link >
            <router-link to="/cart">
             Total Items: {{ total }}
            </router-link>
        </ul>
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
 #nav{ 
    display:flex ;
    align-items: center;
    top: 0;
    background: white;
    z-index: 1;

 }

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

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