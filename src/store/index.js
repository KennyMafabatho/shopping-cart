import Vuex from 'vuex'
import Vue from 'vue'
import { data } from 'autoprefixer'

Vue.use(Vuex)
import actions from './actions'

export default new Vuex.Store({
    state:{ //= data
        products:[],
        //{id, quantity}
    
    },

    getters:{//= computed properties 
      
        availableProducts(state, getters){

            return state.products.filter(product => product.inventory > 0) 
        },
        
        productIsInStock (){
            return (product) => {
                return product.inventory > 0
            }
        }
    },
    
    
    actions,

    mutations:{
        setProducts (state, products) {
            // update products
            state.products = products
        },

      
        
        decrementProductInventory(state, product){
            product.inventory--
        }

       
    }

})