const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            const { product, Quantity, price } = action.payload;
            const existingProductIndex = state.cart.findIndex((item) => item.id === product.id);

            if (existingProductIndex >= 0) {
            
                const updatedCarts = state.cart.map((item, index) => {
                    if (index === existingProductIndex) {
                        return {
                            ...item,
                            Quantity: item.Quantity + Quantity,
                        };
                    }
                    return item;
                });
                
                return {
                    ...state,
                    cart: updatedCarts,
                };
            } else {
       
                const newCartProduct = {
                    id: product.id,
                    img1: product.img1,
                    category: product.category,
                    title: product.title,
                    discount: product.discount,
                    Quantity,
                    price,
                };

                return {
                    ...state,
                    cart: [...state.cart, newCartProduct],
                };
            }
        }

        case "REMOVE_FROM_CART": {
            const { id } = action.payload;
            const updatedCart = state.cart.filter((item) => item.id !== id);
            
            return {
                ...state,
                cart: updatedCart,
            };
        }

        default:
            return state;
    }
};

export default cartReducer;
