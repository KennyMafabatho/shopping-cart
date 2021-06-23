<template>
  <div class=" container pt-4">
    <h1 class="pt-4 pb-2 font-weight-bold">Product List</h1>
    <img  v-if="loading" src="https://imgur.com/JfPpwOA.gif"/>
    <div class="row" v-else>
        <div class = "col-md-3 col-6 pb-4" v-for="product in products ">   
          <router-link :to="{ 
              name: 'productname', 
              params: { id: product.id}}"> 
              <img :src="require(`@/assets/${product.image}`)" :alt="product.name"/> <br>
              {{ product.title }} - <br>
              {{ product.price | currency }} - {{ product.inventory}}
          </router-link>
          <br>
            <span>
              <div class="alert alert-danger" v-if="product.inventory < 5 ">
                  <p>last items in stock</p>
              </div>
              <button type="button" class="btn btn-secondary" :disabled ="!productIsInStock (product)"
              @click="addProductToCart(product)">Add To Cart</button>
            </span>
          </div>
    </div>
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
</style>
