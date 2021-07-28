<template>
<div class="container pt-4">
  <div class="pt-4 mt-4">
    <p v-if="product"> 
       {{ product.title }} 
       <br>
      <span class="badge badge-info">Items left: {{ product.inventory }}</span>
      </p>
    
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