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
</template>