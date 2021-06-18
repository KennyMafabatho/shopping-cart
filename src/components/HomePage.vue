<template>

      <div class="container mt-4" >
        <div class="row mt-4 mb-4">
          <div class="col-md-3 col-6 item">
                <p class="mb-2"> Designer T-shirts </p>
            <router-link to="/products" class="pr-2">
               <span><img src="@/assets/H&M t-shirt.jpg"/></span>
            </router-link> 
          </div>
          <div class="col-md-3 col-6 item">
            <p class="mb-2">Watches</p> 
            <router-link to="/products" class="pr-2">
              <span> <img src="@/assets/watches.jpg"/> </span>
            </router-link> 
          </div>
          <div class="col-md-3 col-6 item">
            <p class="mb-2">Shoes</p>
            <router-link to="/products" class="pr-2"> 
              
                <span> <img src="@/assets/shoes.jpg"/> </span>
            </router-link> 
          </div>
          <div class="col-md-3 col-6 item">
            <p class="mb-2"> Ipads </p>
            <router-link to="/products" class="pr-2"> 
                
                <span> <img src="@/assets/Ipad4.jpg"/> </span>
            </router-link> 
          </div>
        </div>
        <div class="text-center pt-4">
          <a href="/products" class="btn btn-dark active">And more </a>
        </div>
      </div>
</template>



<script>
export default {
 
  computed:{
    productLink(){
      return  this.$route.path +'/products';
    }
  }
  }
</script>

<style scoped>
.p{
  color: black;
}
.container{
  padding-top: 4rem;
}
 body {
    margin: 0;
    padding-top: 2rem;
  }
 header{
 color:#8b8885 ;
}

h2,h4,h5{
 color:#26242b; 
}

 .button{
 border:1px  solid #00f97c;
 background-color: black;
 color:#fff;
}

  img{
    max-width: 200px;
    height: 150px;
  }
  a{
    color:white;
    text-decoration: none;
  }
  a:hover,
  a:visited{
    text-decoration: underline;
  }

 .item{
  color: black;
  text-align: center;
  border-bottom-left-radius: 93%;
  position: relative;
  transition:.3s ease-in-out;
 }
</style>