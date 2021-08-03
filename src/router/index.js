import { name } from 'file-loader'
import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '../components/ProductList'
import ShoppingCart from '../components/ShoppingCart'
import ProductPage from '../components/ProductPage'
import Admin from '../components/Admin'
import HomePage from '../components/HomePage';
import Modal from '../components/Modal'
import Watches from '../components/Watches';
import Shoes from '../components/Shoes';
import Electronics from '../components/Electronics';

Vue.use(Router)

const router = new Router({

    routes: [
        {
            path: '/',
            name:'home',
            component: HomePage
        },
        {
            path: '/products',
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
        },
        {
          path: '/watches',
          name: 'watches',
          component: Watches
        },
        {
          path: '/shoes',
          name: 'shoes',
          component: Shoes
        },
        {
          path: '/electronics',
          name: 'electronics',
          component: Electronics
        }
    ],
    
});

function castRouteParams(route) {
    return {
      id: Number(route.params.id),
    };
  }

export default router