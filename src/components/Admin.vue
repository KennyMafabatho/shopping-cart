<template>

    <div>
        <section class="pb-4 ">
            <h2 class="pt-4 pb-2 font-weight-bold"> Add new Product </h2>
            <div class="form">
            <label for= "title">Title</label>
                <input type="text"  v-model="product.title" required>
            
                <label for= "price">Price</label>
                <input type="currency" v-model="product.price" required>
                
            <label for= "inventory">Inventory</label>
                <input type="number" v-model="product.inventory" required>
                <br>
            <pre class="pt-2"> <button type="button" @click="addProduct(product)" class ="btn btn-success">Add product</button> </pre>
            
            </div>
        </section>
       <footer class="">
        <h4 class="pt-4 pb-4 font-weight-bold text-uppercase">Inventory Management</h4>
        <ul class="align-items-centre">
        <li v-for="product in products "> 
            
        {{ product.title }} - {{ product.price | currency }} <span class="pl-2 pb-2"> <button type="button" class ="btn btn-danger" @click="removeProduct(product)"> Delete </button> </span> 
        <pre class="mt-2"> <button type="button" class ="btn btn-info" @click="decrementInventory(product)" > - </button> {{ product.inventory}} <button type="button" class ="btn btn-info" @click="incrementInventory(product)"> + </button> </pre>
                       
         </li>  
        </ul>
        

        </footer>
    </div>

    
    
</template>
<script>
import {mapState, mapGetters, mapActions} from 'vuex'
import products from '../store/modules/products'

export default {
   
    data(){
        return{
        
        product:{
            
            title:'',
            price:'',
            inventory:''
        }
    }},
      
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
            incrementInventory:'products/incrementInventory',
            decrementInventory:'products/decrementInventory',
            addProduct:'products/addProductToList',
           // removeProduct:'products/removeProduct'
        }),
      
    },
    created(){
        this.loading = true
        this.fetchProducts()
        .then(()=> this.loading = false )
    }
}
</script>