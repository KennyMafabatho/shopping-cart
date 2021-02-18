<template>
    <div>
      <p> {{ product.id }} - {{ product.title }} </p>
    </div>
</template>

<script>

import {products} from '../store/modules/products'
import { mapGetters } from "vuex";
export default {
    data(){
        return{};
    },
    props:
    {
        id:{
            type: Number,
            required: true
        }
    },
     computed:{
           ...mapGetters('products', { getProduct: 'getProductById' }),
        
         product: function () {
             return this.getProduct(this.$route.params.id);
             
       }
       
    },
       
    }

</script>