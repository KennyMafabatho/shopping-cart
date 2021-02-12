import shop from "@/api/shop";

export default {
    
    namespaced : true,

    state:{
        
         //= data
         items:[],
    },

    getters:{
        //= computed properties 
        cartProducts(state, getters, rootState, rootGetters){

            return state.items.map(cartItem =>{

                const product = rootState.products.items.find(product => product.id === cartItem.id)
                return {
    
                    quantity: cartItem.quantity
                }
            })
        },
      
        availableProducts(state, getters){

            return state.items.filter(product => product.inventory > 0) 
        },
        
        productIsInStock (){
            return (product) => {
                return product.inventory > 0
            }
        },

        productsTotal(state,getters){
            let total = 0
            getters.cartProducts.forEach (product => {
                total += product.quantity
            })
            return total
        }

    },

    mutations:{
        setProducts (state, products) {
            // update products
            state.items = products
        },

      
        
        decrementProductInventory(state, product){
            product.inventory--
        },

        // incrementProductInventory (state, product){
        //     product.inventory++
        // },

       
    },

    actions:{

        fetchProducts( { commit }){
            //make the call
            // run setProducts mutation 
            return new Promise((resolve, reject) => {

                shop.getProducts(products => {
                    commit('setProducts', products)
                
                    resolve()
                })
            })
            
        }

    }

    
}