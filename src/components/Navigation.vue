<template>
    <!-- <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light mb-4">
    <router-link class="navbar-brand" to="/" >
      Home
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
       
        <li class="nav-item nav-link ">
          <router-link class="ml-1 text-dark" to="/cart"> Cart </router-link>
        </li>
        <li class="nav-item nav-link ">
          <router-link class="text-align-center text-dark" to="/cart"> Total Items: {{ total }}</router-link>
           <img src="@/assets/cart.jpg" width="30" height="30" class="d-inline-block align-top" alt="">
         </li>
      </ul>
    </div>
        <li class="nav-item nav-link my-2 my-lg-0">
              <router-link class="ml-1 text-dark" to="/admin"> Admin</router-link>
        </li>
  </nav> -->

    <nav
        class="navbar navbar-expand-lg fixed-top navbar-light mb-4"
        style="background-color: #e3f2fd"
    >
        <router-link class="navbar-brand" to="/"> Home </router-link>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
           
                <li class="nav-item mx-auto nav-link my-2 my-lg-0">
                    <form class="form-inline my-2 my-lg-0">
                        <input
                            class="form-control mr-sm-2"
                            type="search"
                            placeholder="Search products, brand and categories"
                            aria-label="Search"
                        />
                        <button
                            class="btn btn-outline-secondary my-2 my-sm-0"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </li>
              <div class="navbar-nav justfy-content-end">

                   
                <router-link class="ml-2 text-dark" to="/cart">
                  
                   
                <img
                        src="@/assets/cart.jpg"
                        width="30"
                        height="30"
                        class="align-items-center"
                        alt=""
                    />
                </router-link>
                    <router-link class="ml-1 text-dark" to="/cart">
                      : {{ total }} </router-link
                    >
                  
                    <router-link class="ml-4 text-dark" to="/admin">
                        Admin</router-link
                    >
               
              </div>
          
        </div>
    </nav>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters("cart", {
            total: "productsTotal",
        }),
        ...mapState("cart", {
            checkoutStatus: (state) => state.checkoutStatus,
        }),
    },
};
</script>

<style scoped>

.nav-links {
    display: flex;
    padding-right: 20px;
    font-size: 20px;
    color: rgb(54, 5, 54);
    font-weight: bold;
    align-items: center;
}
.links {
    padding-right: 20px;
    list-style: none;
}
.links:hover {
    text-decoration: underline;
}
.fixed-top-2 {
    margin-top: 56px;
}
</style>