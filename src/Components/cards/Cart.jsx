import { useContext, useState } from 'react';
import { IoAddOutline } from "react-icons/io5";
import { MdOutlineRemove } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import { AddCard } from "../Navbar/AddcardContext";
import FormatPrice from './FormatPrice';
import FormateDiscount from '../Navbar/FormateDiscount';
import Fainalprice from './Fainalprice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const { cart, removeCart } = useContext(AddCard);
  
  const notify = (productName) => {
    toast.success(`${productName} removed from cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleRemoveFromCart = (id, product) => {
    removeCart(id);
    notify(product.category);
  };

  
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, product) => {
      acc[product.id] = product.Quantity || 1;
      return acc;
    }, {})
  );

  const handleQuantityChange = (id, increment) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) + increment, 1)
    }));
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => {
      const quantity = quantities[product.id] || 1;
      return total + (product.price * quantity);
    }, 0);
  };

  const discount = 149 * 3;
  const packagingFee = 249 * 3; 
  const deliveryFee = 99 * 3; 
  const totalPrice = calculateTotalPrice();
  const finalAmount = totalPrice - discount + packagingFee;



  
  return (
    <> 
  
      <div className='max-w-full h-auto w-auto flex sm:flex-row flex-col justify-center md:p-3 sm:p-2 p-1 border-r-2'>
        <div className="md:p-3 sm:p-2 p-2 md:w-[75%] sm:w-[50%] h-auto w-auto sm:order-1 order-2">
          <div className='bg-[#41a441] text-white sm:p-2 p-1 md:p-3'>
            <h1 className="md:font-bold text-center sm:font-semibold tracking-wider lg:text-2xl md:text-xl sm:text-lg text-base">Product details</h1>
          </div>

          {/* Cart items */}
          {cart.length === 0 ? (
            <p className='h-screen flex justify-center items-center text-center lg:text-2xl md:text-xl  sm:text-lg text-base   font-bold'>No products in the cart <NavLink to='/product' className='ml-2 underline text-green-500 hover:text-red-600'> Buy Now </NavLink></p>
          ) : (

          <div className='grid lg:grid-cols-3 lg:gap-[2px] md:grid-cols-2 grid-cols-1 justify-center lg:p-4 md:p-3 sm:p-2 p-2 items-center'>
            {cart.map(product => {
              const { id, img1, category, title, price, discount } = product;
              const quantity = quantities[id] || 1;
              const formattedPrice = <FormatPrice price={price * quantity} />;

            
              return (
                <div key={id} className='grid grid-col justify-center items-center border-2 shadow-xl lg:p-4 md:p-4 sm:p-4 p-3 rounded-md lg:min-h-[38rem] h-auto md:min-h-[30rem] sm:min-h-[260px] min-h-[240px]'>
                  <div className='lg:h-[320px] bg-white md:h-[300px] sm:h-[260px] h-[240px] overflow-hidden w-auto shadow-md rounded-sm md:rounded-md border-[1px]'>
                    <img src={img1} alt={title} className='rounded-sm w-auto md:rounded-md lg:text-base md:text-sm text-xs sm:text-sm' />
                  </div>
                  <h2 className='font-bold p-1 text-sm md:text-lg lg:text-xl sm:text-base'>{category}</h2>
                  <p className='font-medium text-left lg:text-base md:text-sm text-xs sm:text-sm'>{title}</p>
                  <div className='mt-3 flex justify-between items-center'>
                    <h3 className='md:font-semibold font-medium lg:text-lg md:text-lg sm:text-base text-sm'>
                      <span className='md:font-bold font-semibold'>Price:</span> 
                      <span id='price'>{formattedPrice}</span>
                    </h3>
                    <p className='md:font-bold font-semibold lg:text-lg md:text-lg sm:text-base text-xs'>
                      <span className='md:font-semibold font-medium'>Discount:</span>
                      <FormateDiscount discount={discount} />
                    </p>
                  </div>
                  <div className='mt-3 flex justify-between'>
                    <p className='flex justify-center items-center lg:text-lg md:text-lg sm:text-base text-sm'>
                      Qty: 
                      <MdOutlineRemove onClick={() => handleQuantityChange(id, -1)} className='md:h-5 md:w-5 h-4 w-4 lg:ml-4 md:ml-3 sm:ml-2 ml-1' />
                      <span className='p-[2px_10px] font-bold rounded-full lg:text-xl md:text-lg sm:text-base text-sm'>{quantity}</span>
                      <IoAddOutline onClick={() => handleQuantityChange(id, 1)} className='md:h-5 md:w-5 h-4 w-4' />
                    </p>
                    <button onClick={() => handleRemoveFromCart(id, product)} className='md:font-semibold font-medium text-white bg-red-600 outline-none border-none md:p-[4px_16px] lg:w-[120px] md:w-[100px] text-center sm:w-[100px] w-[80px] p-[2px_4px] border-2 lg:text-lg md:text-base sm:text-sm text-xs tracking-tight lg:rounded-md rounded-sm'>
                      Remove
                    </button>
                  </div>
                </div>
              );       
             })}
          
          </div>)}
        </div>

        {/* Payment details */}
        <div className="sm:h-screen w-auto bg-white md:p-3 sm:p-2 p-1 order-1 sm:order-2 h-auto">
          <div className="bg-[#41a441] text-white md:p-3 sm:p-2 p-1">
            <h1 className="md:font-bold text-center sm:font-semibold tracking-wider lg:text-2xl md:text-xl sm:text-lg text-base">Price details</h1>
          </div>
          <div className='flex-row justify-between items-center shadow-lg'>
            <div className='lg:p-8 md:p-6 sm:p-4 p-2 grid gap-2 sm:text-sm text-xs md:text-base lg:text-lg'>
              <h2 className='flex justify-between items-center'>Total Qty: <span>{cart.reduce((total, product) => total + (quantities[product.id] || 1), 0)}</span></h2>
              <p className='flex justify-between items-center'>Price (Qty): <span className='font-medium'><FormatPrice price={calculateTotalPrice()} /></span></p>
              <p className='flex justify-between items-center'>Discount: <span>- <FormatPrice price={discount} /></span></p>
              <p className='flex justify-between items-center'>Del. Charge: <span><span className="line-through"><FormatPrice price={deliveryFee} /></span> <span className='text-green-500'>Free Delivery</span></span></p>
              <h3 className='flex justify-between items-center'>Secured Packaging Fee: <span>+ <FormatPrice price={packagingFee} /></span></h3>
            </div>
            <div className='lg:p-4 md:p-2 sm:p-1 p-[2px] sm:text-base text-xs md:text-lg lg:text-xl'>
              <hr />
              <p className='pl-[6px] pr-[6px] lg:p-4 md:p-2 p-1 flex justify-between items-center font-semibold'>
                Total Amount <span className='text-green-500'> <FormatPrice price={calculateTotalPrice()!==0 ? finalAmount : 0}/></span>
              </p>
              <hr />
            </div>
            <div>
              <p className='sm:p-1 p-[2px] md:text-center flex lg:gap-4 md:gap-3 sm:gap-2 gap-1 justify-center text-left text-gray-500 sm:text-es text-[7pt] md:text-sm lg:text-base'>
                <MdSecurity className='md:h-5 md:w-5 sm:h-4 sm:w-4 h-3 w-3 ml-4' />
                <span>Safe and secure payments. Easy returns. <br /> 100% Authentic products.</span>
              </p>
            </div>
            <hr />
            <div className='lg:p-4 md:p-2 sm:p-1 p-2 flex justify-between items-center font-bold sm:text-base text-xs md:text-lg lg:text-xl'>
            <p>  {<Fainalprice fainalprice={calculateTotalPrice()!==0 ? finalAmount : 0}/>}</p>
              <button className='md:font-semibold font-medium bg-yellow-400 outline-none border-none md:p-[4px_16px] lg:w-[150px] md:w-[120px] text-center sm:w-[100px] w-[80px] p-[4px_6px] border-2 lg:text-lg md:text-base sm:text-sm text-xs tracking-tight lg:rounded-md rounded-sm'>
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Cart;
