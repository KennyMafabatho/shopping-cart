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
            
        {{ product.title }} - {{ product.price | currency }} <span class="pl-2 pb-2"> <button type="button" class ="btn btn-danger" data-toggle="modal" data-target="#ModalID"> Delete </button> </span> 
        <pre class="mt-2"> <button type="button" class ="btn btn-info" @click="decrementInventory(product)" > - </button> {{ product.inventory}} <button type="button" class ="btn btn-info" @click="incrementInventory(product)"> + </button> </pre>
                       
         </li>  
        </ul>

         <div class="modal fade" id="modalID" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="ModalLabel">Delete Product</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"> </span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Are you sure you want to delete this product?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-danger" @click="removeProduct(product)" >Delete</button>
                    </div>
                </div>
            </div>
        </div>
        

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
           removeProduct:'products/removeProductFromList'
        }),
      
    },
    created(){
        this.loading = true
        this.fetchProducts()
        .then(()=> this.loading = false )
    }
}
</script>

<style scoped>
.modal {
  display: none; 
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: #474e5d;
  padding-top: 50px;
}
</style>