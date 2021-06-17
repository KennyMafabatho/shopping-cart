<template>
  <div class="pt-4">
    <section class="pb-4 ">
      <h2 class="pt-4 pb-2 font-weight-bold">Add new Product </h2>
      <form method="post" >
        <p v-if="errors.length">
          <ul>
            <li v-for="(error,index) in errors" :key="index"> {{ error }} </li>
          </ul>
        </p>
        <div class="form-group">
        <label class="col-sm-1 col-form-label" for= "title">Title</label>
            <input type="text" v-model="product.title" required>
        </div>
        <div class="form-group">
        <label class="col-sm-1 col-form-label"  for= "price">Price</label>
            <input type="currency" v-model="product.price" required>
        </div>
        <div class="form-group">
        <label class="col-sm-1 col-form-label"  for= "inventory">Inventory</label>
            <input type="number" v-model="product.inventory" required>
            <br>
        </div>
        <pre class="pt-2"> <button type="button" @click="errorCheck(product)" class ="btn btn-primary">Add product</button> </pre>
      </form>
    </section>

    <footer class="">
      <h4 class="pt-4 pb-4 font-weight-bold text-uppercase">Inventory Management</h4>
      <ul class="align-items-centre">
        <li v-for="product in products" :key="product.id"> 
          <span class="pl-2 pb-2"> 
            <button type="button" class="btn btn-secondary"  @click="confirmEditProduct(product)">Edit</button>
          </span>
          {{ product.title }} - {{ product.price | currency }} 
          <span class="pl-2 pb-2"> 
            <button type="button" class="btn btn-danger"  @click="confirmDeleteProduct(product)">Delete</button> 
          </span>
          <pre class="mt-2"> <button type="button" class ="btn btn-info" @click="decrementInventory(product)" > - </button> {{ product.inventory}} <button type="button" class ="btn btn-info" @click="incrementInventory(product)"> + </button> </pre>             
        </li>  
      </ul>
      <modal v-if="this.deleteProduct">
        <template v-slot:header>
          <h3 >Deleting a product</h3>
        </template>

        <template v-slot:body> <h4> Are you sure you want to delete {{ deleteProduct.title }} ? </h4>
      </template>

        <template v-slot:footer>
          <div class="align-items-center justify-content-between mx-auto ">
            <button class="btn btn-secondary" @click="confirmDeleteProduct(null)">Cancel</button>
            <button class="btn btn-danger" @click="deletingProduct">Delete</button>
          </div>
        </template>
      </modal>

      <modal v-if="this.editProduct">
        <template v-slot:header>
          <h3>Editing Product</h3>
        </template>

        <template v-slot:body> <label class="form"> 
          <p> Edit  {{ editProduct.title }} </p>
        <input v-model="productName" placeholder="Edit"> </label>        
        </template>

        <template v-slot:footer>
          <div class="align-items-center justify-content-between mx-auto ">
            <button class="btn btn-secondary" @click="confirmEditProduct(null)">Cancel</button>
            <button class="btn btn-success" @click="renameProduct(productName)">Save</button>
          </div>
        </template>
      </modal>
    </footer>
  </div>
</template>
<script>
import {mapState, mapGetters, mapActions} from 'vuex'
import Modal from './Modal'
export default {
  components:{
    Modal
  },
  data(){    
    return{   
    product:{
      title:'',
      price:'',
      inventory:''
    },
      productName: '',
      errors:[]         
   }
  },
  computed:{

      ...mapState({
          products: state => state.products.items,
          deleteProduct : state => state.products.deleting,
          editProduct: state => state.products.editing
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
        removeProduct:'products/removeProductFromList',
        setProductTitle:'products/setProductName'
    }), 
      
    confirmDeleteProduct(product){
      this.$store.commit('products/deleteProduct',product)
    
    },
    confirmEditProduct( product){
      this.$store.commit('products/editProduct', product)
      if (product) {
        this.productName = product.title
        }
      
    },
    errorCheck(product){
      
    this.errors= []
    if (!product.title) {
      this.errors.push("Product title is required!")
    }
    
    if (!product.price) {
      this.errors.push("Price is required!");
    }
    
    if (!product.inventory) {
      this.errors.push("Inventory is required!");
    }
    else if (product.title && product.price && product.inventory) {
      this.addProduct(product)}

    },
    deletingProduct(){
      this.removeProduct(this.deleteProduct)
      this.confirmDeleteProduct(null)
    },
    renameProduct(){
      this.setProductTitle(this.productName),
      this.confirmEditProduct(null)
    },
        
  },
  created(){
      this.loading = true
      this.fetchProducts()
      .then(()=> this.loading = false )
  },
    
}
</script>

<style scoped>
.overflow-hidden {
  overflow: hidden;
}
.btn {
  padding: 8px 16px;
  border-radius: 5px;
  }

overflow-hidden {
  overflow: hidden;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.d-flex {
  display: flex;
}
.align-items-center {
  align-items: center;
}
.justify-content-between {
  justify-content: space-between;
}
.actions .cancel {
     background: darkred;
     color: white;
    }

</style>