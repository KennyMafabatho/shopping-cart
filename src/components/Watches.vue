<template>
  <div class="container pt-4">
    <h1 class="pt-4 pb-2 font-weight-bold"></h1>
    <img  v-if="loading" src="https://imgur.com/JfPpwOA.gif"/>
    <div class="row" v-else>
        <div class = "col-md-3 col-6 pb-4" v-for="(product, index) in products"  :key="index">
          <div v-if="product.category_id === 102"> 
          <router-link :to="{ 
              name: 'productname', 
              params: { id: product.id}}"> 
              <img :src="require(`@/assets/${product.image}`)" :alt="product.name"/> <br>
              {{ product.title }} <br>
              {{ product.price | currency }}
          </router-link>
          <br>
            <span>
              <div class="pb-2" v-if="product.inventory < 5 ">
                  <span class="badge badge-success">Last items in stock</span>
              </div>
              <button type="button" class="btn btn-outline-secondary btn-sm" :disabled ="!productIsInStock (product)"
              @click="addProductToCart(product)">Add To Cart</button> 
            </span>  
          </div>
        </div>
    </div>
    <br>
    <div class="pt-4">

    </div>
    <br>
     <div class="pt-4">
       
    </div>
    <br>
     <div class="pt-4">
       
    </div>
    <hr>
    <br>
     <div class="pt-4">
       <p>Go to shopping <a href="/">home page </a> </p>
    </div>
    <br>
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
      height: 150px;
    }
    .products{
    display: flex;
    justify-content: space-between;
    }
    .alert {
   display:inline-block   
}
</style>
