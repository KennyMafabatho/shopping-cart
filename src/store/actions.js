import shop from "@/api/shop";

export default { //store's methods
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