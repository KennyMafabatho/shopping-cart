<template>
    <div class="pt-4">
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

<style scoped>
div{
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>