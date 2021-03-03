<template>
    <div>
        <h1 class="pt-4 pb-2 font-weight-bold">Product List</h1>
        <img  v-if="loading" src="https://imgur.com/JfPpwOA.gif"/>
        <ul v-else>
            <li v-for="product in products "> 
                
               <router-link :to="{ 
                   
                   name: 'productname', 
                   params: { id: product.id}}"> 
                     {{ product.title }}
                   <img class="pb-4" :src="require(`@/assets/${product.image}`)" :alt="product.name"/>
                  <span>  - {{ product.price | currency }} - {{ product.inventory}} </span>
               </router-link>
                <span>
                    <div v-if="product.inventory < 5 ">
                        <p>last items in stock</p>
                    </div>
                <button type="button" class="btn btn-success" :disabled ="!productIsInStock (product)"

                    @click="addProductToCart(product)">Add To Cart</button>
                </span>
            </li>
            
            
        </ul>
        
        
    </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'

export default {

    data(){
        return{
            loading: false
        }
    },
    computed:{
        

        ...mapState({
            products: state => state.products.items
    }),

        ...mapGetters('products', {
            productIsInStock: 'productIsInStock'
        })

       
    },
    methods:{

        ...mapActions({
            fetchProducts :'products/fetchProducts',
            addProductToCart :'cart/addProductToCart',
            
        })
       
    },

    created(){
        this.loading = true
        this.fetchProducts()
        .then(()=> this.loading = false )
    }
}
</script>

<style scoped>
    img{
        max-width: 200px;
        height: 200px;
    }
</style>