import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '../components/ProductList'
import ShoppingCart from '../components/ShoppingCart'

 

Vue.use(Router)

const router = new Router({

    routes: [
        {
            path: '/products',
            name: 'products',
            component: ProductList
        },
        {
            path: '/cart',
            name: 'cart',
            component: ShoppingCart
        }
    ],
});

export default router