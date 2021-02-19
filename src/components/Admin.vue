<template>

    <div>
        <section>
        <form class="pb-4">
            <h4> Add new Product </h4>
           <p> <label>Title</label>
            <input v-model="title" type="text"/>
           </p>
           <p>
            <label>Price</label>
            <input v-model="price" type="number" />
           </p>
           <p>
            <label>Inventory</label>
            <input v-model="inventory" type="number" />
           </p>
           <p>
            <button type="submit">Add product</button>
           </p>
        </form>


        </section>
        <h4 class="pt-4 pb-2">Inventory Management</h4>
        <ul class="justify-content-centre">
        <li v-for="product in products "> 
                
               <router-link :to="{ 
                   name: 'productname', 
                   params: { id: product.id}}"> {{ product.title }} - {{ product.price | currency }} - {{ product.inventory}} 
                </router-link>
    
         </li>  
        </ul>
        <section>

        </section>
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
            addProductToCart :'cart/addProductToCart'
        })
       
    },

    created(){
        this.loading = true
        this.fetchProducts()
        .then(()=> this.loading = false )
    }
}
</script>