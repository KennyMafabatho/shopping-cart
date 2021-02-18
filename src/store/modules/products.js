import shop from "@/api/shop";

export default {
    
    namespaced : true,

    state:{
        
         //= data
         items:[],
         
    },

    getters:{
        //= computed properties 
      
        availableProducts(state, getters){

            return state.items.filter(product => product.inventory > 0) 
        },
        
        productIsInStock (){
            return (product) => {
                return product.inventory > 0
            }
        },

        getProductById: (state) => (id) => {
            
            return state.items.find( product => product.id === id )
        },
        all: (state) => { return state.items}
        
    },

    mutations:{
        
        setProducts (state, products) {
            // update products
            state.items = products
        },

        decrementProductInventory(state, product){
            product.inventory--
        },

    
       
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
            
        },

    }

    
}