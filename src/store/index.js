import Vuex from 'vuex'
import Vue from 'vue'
import { data } from 'autoprefixer'
import actions from './actions'
import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex)


export default new Vuex.Store({

    modules:{
        cart,
        products
    },
    state:{
        //{id, quantity}
    
    },

    getters:{
    
    },
    actions,

    mutations:{

    }

})