const ReducerProduct = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case 'API_DATA':
      return {
        ...state,
        isLoading: false,
        Products: action.payload,
        isError: false,
      };

    case 'ERROR_DATA':
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };

    default:
      return state;
  }
};

export default ReducerProduct;
