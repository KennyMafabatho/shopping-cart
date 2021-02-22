<template>
    <div>
        <h1>Shopping Cart</h1>
        <ul>
            <li v-for="product in products">
                {{ product.title }} - {{ product.price | currency }} - {{ product.quantity }}
                    
               
            </li>
        </ul>
        <p> Total : {{ total | currency }} </p>
                <button :disabled="isEmpty"

                @click="checkout"> Checkout </button>
                
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