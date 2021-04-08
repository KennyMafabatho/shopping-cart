<template>
    <div>
    <b-navbar type="dark" variant="info" >
        <b-navbar-brand>  
            <router-link class="text-dark" to="/"> Products</router-link>
          
            <router-link class="ml-1 text-dark" to="/cart"> Cart </router-link>
          
              <router-link class="text-align-center text-dark" to="/cart"> Total Items: {{ total }}</router-link>
              
        </b-navbar-brand>
        <b-navbar-brand class="ml-auto">
          <router-link class="text-dark" to="/admin">Admin</router-link>
        </b-navbar-brand>
        
        </b-navbar>
    </div>
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