

export default{
    state:{
        cart : [],
        checkoutStatus: null
    },

    getters:{

        cartProducts(state){

            return state.cart.map(cartItem =>{

                const product = state.products.find(product => product.id === cartItem.id)
                return {
                    title: product.title,
                    price: product.price,
                    quantity: cartItem.quantity
                }
            })
        },
        cartTotal(state, getters){
            let total = 0
            getters.cartProducts.forEach(product => {
                total +=  product.price * product.quantity
            })
            return total

            //return getters.cartProducts.reduce((total, product) =>  total + product.price* product.quantity, 0)
        },
    },
    
    mutations:{

        pushProductToCart(state, productId){
            state.cart.push({
                id: productId,
                quantity: 1
            })
        },

        incrementItemQuatity(state, cartItem){
            cartItem.quantity++
        },

        setCheckoutStatus(state, status){
            state.checkoutStatus = status
        },

        emptyCart(state){
            state.cart = []
        }

    },
    actions:{
        
        addProductToCart({state, getters, commit}, product){
            if (getters.productIsInStock(product)){

            const cartItem = state.cart.find(item => item.id === product.id)
            if(!cartItem){
                //pushProductToCart
                commit('pushProductToCart', product.id)
            } 
            else{
                //incrementItemQuantity
                commit('incrementItemQuatity', cartItem)
            }
            commit('decrementProductInventory', product)            

            }
          
        },
        checkout ({state, commit}){
            shop.buyProducts(
                state.cart,
                () => {
                    commit('emptyCart')
                    commit('setCheckoutStatus', 'success')
                },
                () => {
                    commit('setCheckoutStatus', 'fail')
                }
            )
        }
    }
}