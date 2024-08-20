/* eslint-disable react/prop-types */
import axios from 'axios';
import reducer from './ReducerProduct';
import { createContext, useEffect, useReducer } from 'react';

const API = 'https://res.cloudinary.com/dpiiduvvx/raw/upload/v1703580765/API/productsAPI';

const ProductContext = createContext({
  isLoading: false,
  isError: false,
  Products: [],
});

const initialState = {
  isLoading: false,
  isError: false,
  Products: [],
};

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProductData = async (url) => {
    dispatch({ type: 'SET_LOADING' });
      try {
        const response = await axios.get(url);
        const productData = response.data ;

        const NewData = Object.values(productData).flat();
        dispatch({ type: 'API_DATA', payload: NewData });
      } catch (error) {
        dispatch({ type: 'ERROR_DATA', payload: error.message });
      }
  };

  useEffect(() => {
    fetchProductData(API);
  }, []);

  return (
    <ProductContext.Provider value={{ ...state }}>
      {children}
    </ProductContext.Provider>
  );
};

export default AppContext;
export { ProductContext };
