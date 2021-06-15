<template>
    <div class="pt-4">
        <h1 class="pt-4 pb-2 font-weight-bold">Shopping Cart</h1>
        <ul>
            <li v-for="product in products">
                {{ product.title }} - {{ product.price | currency }} - {{ product.quantity }}
                    
               
            </li>
        </ul>
        <p> Total : {{ total | currency }} </p>
                <button type="button" class="btn btn-info" :disabled="isEmpty"

                @click="checkout" > Checkout </button>
                
                <p v-if="checkoutStatus">{{checkoutStatus}}</p>
    </div> 
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'

export default {

    computed:{

        isEmpty:(
            ({products}) => products.length === 0
        ),

        ...mapGetters('cart',{
            products: 'cartProducts',
            total:'cartTotal',
            cartProducts:'cartProducts'
        }),
        ...mapState('cart',{
            checkoutStatus: state => state.checkoutStatus
        })
     },

     methods: {
         ...mapActions('cart', ['checkout']),
     }
}
</script>