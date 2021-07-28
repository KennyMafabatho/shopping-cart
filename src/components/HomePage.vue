<template>
  <div class="container mt-4 " >
    <div class="row mt-4 mb-4">
      <div class="col-md-3 col-6 item">
        <router-link to="/products" class="pr-2">
            <p class="mb-2"> Designer T-shirts </p>
            <span><img src="@/assets/H&M t-shirt.jpg"/></span>
        </router-link> 
      </div>
      <div class="col-md-3 col-6 item">
        <router-link to="/products" class="pr-2">
        <p class="mb-2">Watches</p> 
          <span> <img src="@/assets/watches.jpg"/> </span>
        </router-link> 
      </div>
      <div class="col-md-3 col-6 item">
        <router-link to="/products" class="pr-2"> 
        <p class="mb-2">Shoes</p>
            <span> <img src="@/assets/shoes.jpg"/> </span>
        </router-link> 
      </div>
      <div class="col-md-3 col-6 item">
        <router-link to="/products" class="pr-2"> 
        <p class="mb-2"> Ipads </p>
            <span> <img src="@/assets/Ipad4.jpg"/> </span>
        </router-link> 
      </div>
    </div>
    <div class="text-center pt-4 pb-4">
      <router-link to="/products">
      <button type="button" class="btn btn-link btn-dark text-light">And more...</button>
      </router-link>
    </div>
    
    <!-- <footer class="footer pt-4">
        <div class="containter pb-4">
          <div class="row">
            <div class="col-md-4 col-6">
              <h2> Contact us </h2>
  
               Email :
                <br>
                Github: <i data-feather="copy"></i> <i class="fab fa-github-square"></i> <i class="fab fa-font-awesome"></i>
                <br>
               LinkedIn: <i class="fab fa-linkedin"></i> <i class="fas fa-camera"></i>
            </div>
            <div class="col-md-4 col-6">
                    <p class="copyright"> Copyright © Kenny Mafabatho 2021</p>
            </div>
            <div class="col-md-4 col-6">
               <h3> <strong> In-Store</strong> </h3>
               <ul>
                 <li>
                   <p>Shoes</p>
                 </li>
                 <li><p>Watches</p></li>
                 <li><p>T-shirts</p></li>
               </ul>
            </div>
          </div>
        </div>
    </footer> -->
    <br>
    <br>
    <br>
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
    color: black;
    text-decoration: none;
  }
  a:hover,
  a:visited{
    text-decoration: underline;
  }
  p.copyright {
        position: absolute;
        width: 100%;
        color: black;
        line-height: 40px;
        font-size: 0.7em;
        text-align: center;
        bottom:0;
    }
 .item{
  color: black;
  text-align: center;
  border-bottom-left-radius: 93%;
  position: relative;
  transition:.3s ease-in-out;
 }
</style>