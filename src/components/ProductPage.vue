<template>
    <div>
      <p v-if="product"> {{ product.id }} - {{ product.title }} </p>
    </div>
</template>

<script>
export default {
    data () {
        return {};
    },
    props:
    {
        id:{
            type: Number,
            required: true
        }
    },
    computed:{
        product: function () {
             return this.$store.getters['products/getProductById'](this.id);
        }
    },
       
}

</script>