<template>
    <div>
      <p> {{ product.id }}  {{ product.title }} </p>
    </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
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
     
        ...mapState({
            products: state => state.products.items
    }),
      ...mapGetters('products', {
            productIsInStock: 'productIsInStock'
        }),

    computed:{

         product(){
            return products.find(product => product.id === this.id )
        },

    }

  }

</script>