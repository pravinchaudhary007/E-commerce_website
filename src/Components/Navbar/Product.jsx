/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useState } from "react";
import { ProductContext } from '../cards/AppContext';
import FormatPrice from "../cards/FormatPrice";
import FormateDiscount from "./FormateDiscount";
import Qty from "../cards/Qty";
import { AddCard } from "./AddcardContext";
import Loading from "../../Loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from "./Searchbar";


const Product = () => {
  const { addToCart } = useContext(AddCard);
  const { isLoading, Products, isError } = useContext(ProductContext);

  const handleAddToCart = (product, quantity, price) => {
    addToCart(product, quantity, price);
    notify(product.category); 
  };

   
  const notify = (productName) => {
    toast.success(`${productName} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  


  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div className="h-screen flex justify-center items-center text-center text-xl font-bold"><p>Error loading products.</p></div>;
  }

  if (!Array.isArray(Products)) {
    console.error('Products data is not an array:', Products);
    return <div className="h-screen flex justify-center items-center text-center text-xl font-bold"><p>Invalid data format.</p></div>;
  }


  return (
    <>
      {/* Search bar Open */}
      <Searchbar search={'Search'}/>
      {/* Search bar Close */}

      {/* Products Open */}
      <div className='max-w-full w-auto h-screen'>
        <div className='justify-center flex-row items-center'>
          {/* Title */}
          <div className='lg:m-8  text-black md:m-6 sm:m-4 m-2 w-auto rounded-sm md:rounded-sm shadow-lg text-center'>
            <h1 className='lg:text-2xl md:text-xl sm:text-lg text-sm tracking-wider font-bold lg:p-2 sm:p-1 p-[1px] [text-shadow:3px_4px_7px_rgb(0,0,0,0.7)]'>
              Products
            </h1>
          </div>
        </div>

        {/* Controls Cards */}
        <div className="bg-neutral-50 md:rounded-md rounded-sm md:m-3 sm:m-2 m-2 md:p-3 sm:p-3 p-3">
          <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-2 sm:gap-3 gap-2'>
            {/* Product */}

            {Products.map((product) => {
                 
                const { id, img1, category, title, price, discount } = product;
                const [quantity, setQuantity] = useState(1);
                const handleQuantityChange = (increment) => {
                  setQuantity(prev => Math.max(prev + increment, 1));
                };

                const formattedPrice = <FormatPrice price={price * quantity} />;

                return (
                  <div key={id} className='grid grid-col bg-white outline-none justify-center items-center border-[2px] shadow-xl lg:p-6 md:p-5 sm:p-4 p-3 rounded-md'>
                    <div className='lg:h-[320px] bg-white md:h-[300px] sm:h-[260px] h-[240px] overflow-hidden w-auto grid justify-center items-center shadow-md rounded-sm md:rounded-md border-[1px]'>
                      <img src={img1} alt={`image of ${title}`} className='rounded-sm w-auto bg-transparent md:rounded-md' />
                    </div>
                    <h2 className='font-bold p-1 text-sm md:text-lg lg:text-xl sm:text-base'>{category}</h2>
                    <p className='font-medium text-left lg:text-[11pt] md:text-sm text-xs sm:text-sm'>{title}</p>
                    <div className='mt-3 flex justify-between items-center'>
                      <h3 className='md:font-semibold font-medium lg:text-lg md:text-lg sm:text-base text-sm'>
                        <span className='md:font-bold font-semibold'>Price: </span>
                        <span id='price' className="text-green-500">{formattedPrice}</span>
                      </h3>
                      <p className='font-medium lg:text-lg md:text-lg sm:text-base text-xs'>
                        <span className='font-normal'>Discount: <span className="text-red-600"><FormateDiscount discount={discount} /></span></span>
                      </p>
                    </div>
                    <div className='mt-3 flex justify-between'>
                      <Qty
                        amount={quantity}
                        setIncrease={() => handleQuantityChange(1)}
                        setDecrease={() => handleQuantityChange(-1)}
                      />
                      <button
                        onClick={() => handleAddToCart(product, quantity, price)}
                        className='font-medium text-white bg-green-600 outline-none border-none md:p-[4px_16px] lg:w-[150px] md:w-[120px] text-center sm:w-[100px] w-[80px] p-[2px_4px] border-2 lg:text-lg md:text-base sm:text-sm text-xs tracking-tight lg:rounded-md rounded-sm'
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {/* Products Close */}

      <ToastContainer />
    </>
  );
};

export default Product;
