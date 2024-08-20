import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { GiDeathNote } from "react-icons/gi";
import { MdOutlineLocalLibrary } from "react-icons/md";
import logo from './../../assets/ecomm.jpg'
import { AddCard } from "../Navbar/AddcardContext";

const Navigation = () => {
  const { cart } = useContext(AddCard);
  const [Sidebar, setSidebar] = useState('false')

  const menu = () => {
    setSidebar(!(Sidebar))
  }
  const toggle = () => {
    setSidebar('false')
  }
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 56) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const productCount = cart.length;

  return (<>
   <nav className={`transition-all  ease-in-out shadow-lg ${isFixed ? 'fixed top-0 max-w-full duration-1000 delay-300 w-full left-0 bg-white z-50' : 'relative duration-300 delay-1000 max-w-full w-auto bg-white '}`}>
    <div className='h-auto max-w-full w-auto shadow-lg'>
      <div className='flex justify-around items-center p-2'>
        <div className='flex justify-between items-center gap-3'>
          <AiOutlineMenuUnfold onClick={menu} className={`lg:h-6 lg:w-6 h-5 w-5 lg:hidden block `} />
          <a href='/'> <img className='lg:h-16 md:h-14 lg:w-16 md:w-14 h-10 w-10 rounded-full border-4 hover:rotate-360 delay-1000 hover:animate-spin' src={logo} alt="E-commerce website logo" /> </a>
        </div>

        <div className='lg:block md:blok hidden '>
          <ul className='grid grid-flow-col items-center gap-6 font-thick text-[14pt]'>
            <li className='border-[#368b36] hover:text-white delay-100 transition duration-300 ease-in-out hover:cursor-pointer bg-stone-50 border-2 shadow-lg outline-none hover:bg-[#41a441]  p-[2px_20px] hover:animate-pulse rounded-md'><NavLink to='/'>Home</NavLink></li>
            <li className='border-[#41a441] hover:text-white delay-100 transition duration-300 ease-in-out hover:cursor-pointer bg-stone-50 border-2 shadow-lg outline-none hover:bg-[#41a441]  p-[2px_20px] hover:animate-pulse rounded-md'><NavLink to='product'>Product</NavLink></li>
            <li className='border-[#41a441] hover:text-white delay-100 transition duration-300 ease-in-out hover:cursor-pointer bg-stone-50 border-2 shadow-lg outline-none hover:bg-[#41a441]  p-[2px_20px] hover:animate-pulse rounded-md'><NavLink to='about'>About Us</NavLink></li>
            <li className='border-[#41a441] hover:text-white delay-100 transition duration-300 ease-in-out hover:cursor-pointer bg-stone-50 border-2 shadow-lg outline-none hover:bg-[#41a441]  p-[2px_20px] hover:animate-pulse rounded-md'><NavLink to='contact'>Contact Us</NavLink></li>
          </ul>
        </div>

        <div className='flex justify-center items-center lg:gap-6 md:gap-4 sm:gap-2 gap-1'>

          <NavLink to='/cart' className='relative  md:mr-4 sm:mr-3 mr-2 '>
            <div className='relative flex items-center'>
              <p className='text-[8px] sm:text-[9pt] md:text-[12pt] absolute md:-top-[10px] md:-right-3 sm:-top-[9px] sm:-right-[9px] -top-[7px] -right-[7px] lg:font-semibold md:font-medium font-normal  bg-green-500 text-white text-xs rounded-full  h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 flex items-center justify-center'>
             {productCount}
              </p>
              <FiShoppingCart className='lg:h-6 lg:w-6 md:h-6 md:w-6 sm:h-4 sm:w-4 h-4 w-4 hover:text-green-600' />
            </div>
          </NavLink>

          <NavLink to='/login'>      <button className='hover:text-white hover:animate-pulse border-2 hover:delay-100 transition duration-300 ease-in-out border-[#41a441] lg:p-[2px_16px] md:p-[1px_12px]  p-[1px_8px] rounded-sm sm:rounded-md hover:bg-green-500 text-[10px] sm:text-[10pt] md:text-[12pt]'> Login </button> </NavLink>
          <NavLink to='register'>   <button className='hover:text-white hover:animate-pulse border-2 hover:delay-100 transition duration-300 ease-in-out border-[#41a441] lg:p-[2px_16px] md:p-[1px_12px]  p-[1px_8px] rounded-sm sm:rounded-md hover:bg-green-500 text-[10px] sm:text-[10pt] md:text-[12pt]'> Register</button> </NavLink>
        </div>
      </div>
    </div>
    </nav>




    <div className={`transform ${Sidebar ? 'hidden' : 'translate-x-0'} lg:hidden transition-transform ease-in-out h-screen md:max-w-96 sm:max-w-64 max-w-40 md:p-6 shadow-2xl sm:p-4 p-2 bg-black bg-opacity-75 text-white  overflow-x-auto absolute z-30 top-30 left-0 `} >
      <div className='flex justify-between items-center pr-[12px]'>
        <h2 className='md:text-xl sm:text-lg flex md:gap-3 font-medium justify-center items-center sm:gap-2 gap-1 text-xs'><CiMenuFries className='sm:h-6 sm:w-6 h-4 w-4 rotate-180' /> Menu</h2>
        <IoCloseSharp onClick={menu} className='sm:h-6 sm:w-6 h-5 w-5' />
      </div>
      <div className='lg:p-6  md:p-[20px_30px] sm:p-[18px_24px] p-[14px_12px]'>
        <ul className='md:text-lg sm:text-sm text-xs grid gap-5'>
          <li><NavLink onClick={toggle} to='/' className='flex items-center lg:gap-3 md:gap-2 gap-1' > <FaHome className='md:h-5 md:w-5 sm:h-4 sm:w-4 h-3 w-3' />  Home </NavLink></li>
          <li> <NavLink onClick={toggle} to='product' className='flex items-center lg:gap-3 md:gap-2 gap-1'> <MdProductionQuantityLimits className='md:h-5 md:w-5 sm:h-4 sm:w-4 h-3 w-3' /> Products</NavLink></li>
          <li><NavLink onClick={toggle} to='about' className='flex items-center lg:gap-3 md:gap-2 gap-1' > <GiDeathNote className='md:h-5 md:w-5 sm:h-4 sm:w-4 h-3 w-3' />  About Us </NavLink></li>
          <li><NavLink onClick={toggle} to='contact' className='flex items-center lg:gap-3 md:gap-2 gap-1' > <MdOutlineLocalLibrary className='md:h-5 md:w-5 sm:h-4 sm:w-4 h-3 w-3' />  Contect Us </NavLink></li>
        </ul>
      </div>
    </div>

  </>)
}

export default Navigation
