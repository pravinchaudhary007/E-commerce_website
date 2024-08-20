/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";
import reducer from "./cartReducer";

const AddCard = createContext();

const productdata = () => {
    let items = localStorage.getItem("Product");
    if (items) {
        return JSON.parse(items);
    } else {
        return [];
    }
};

const initialState = {
    cart: productdata(),
    total_item: "",
    total_amount: "",
};


const AddcardContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (product, Quantity, price) => {
        dispatch({ type: "ADD_TO_CART", payload: { product, Quantity, price } });
    };

    const removeCart = (id) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
    };
 
     useEffect(()=>{
       localStorage.setItem("Product",JSON.stringify(state.cart))
     },[state.cart])
    
    return (
        <AddCard.Provider value={{ ...state, addToCart, removeCart }}>
            {children}
        </AddCard.Provider>
    );
};

export default AddcardContext;
export { AddCard };
