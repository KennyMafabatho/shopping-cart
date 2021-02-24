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
            if (!id || !state.items.length) return null
            
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
        incrementProductInventory(state, product){
            product.inventory++
        },

        addNewProduct(state, product){
            state.items.push(product)
        }
       
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
        addProductToList(context, product){
            context.commit('addNewProduct', product)
        },


    }

    
}