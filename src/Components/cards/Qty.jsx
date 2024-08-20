/* eslint-disable react/prop-types */
import { IoAddOutline } from "react-icons/io5";
import { MdOutlineRemove } from "react-icons/md";

const Qty = ({ setDecrease, setIncrease, amount }) => {
  return (
    <p className='flex justify-center items-center lg:text-lg md:text-lg sm:text-base text-sm'>
      Qty : 
      <MdOutlineRemove 
        onClick={setDecrease} 
        className='md:h-5 md:w-5 h-4 w-4 lg:ml-4 md:ml-3 sm:ml-2 ml-1' 
      /> 
      <span className='p-[2px_10px] font-bold rounded-full lg:text-xl md:text-lg sm:text-base text-sm'>
        {amount}
      </span>
      <IoAddOutline 
        onClick={setIncrease} 
        className='md:h-5 md:w-5 h-4 w-4' 
      /> 
    </p>
  );
};

export default Qty;
