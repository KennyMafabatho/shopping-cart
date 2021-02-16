<template>
    <div>
       <p> {{ product.id }} - {{product.name}} </p>
    </div>
</template>

<script>
import shop from "@/api/shop";

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
        product(){
            return shop.products.find ( product => product.id === this.id);
        }
    }
}
</script>