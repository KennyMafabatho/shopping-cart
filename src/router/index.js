import { name } from 'file-loader'
import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '../components/ProductList'
import ShoppingCart from '../components/ShoppingCart'
import ProductPage from '../components/ProductPage'
import Admin from '../components/Admin'
import Modal from '../components/Modal'

Vue.use(Router)

const router = new Router({

    routes: [
        {
            path: '/',
            name: 'products',
            props : true,
            component: ProductList,
            
            
        },
        
        {
            path:'/productpage/:id',
            name: 'productname',
            props: castRouteParams,
            component: ProductPage
            
        },
        
        {
            path: '/cart',
            name: 'cart',
            component: ShoppingCart
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin
        }
    ],
    
});

function castRouteParams(route) {
    return {
      id: Number(route.params.id),
    };
  }

export default router