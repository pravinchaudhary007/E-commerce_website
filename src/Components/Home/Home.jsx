import {NavLink } from 'react-router-dom'
import Skills from './Skills'
import Footer from './Footer'
import BgVideo from '../../assets/vid-bg.mp4';
import { FaArrowTrendUp } from "react-icons/fa6";
import About from '../Navbar/About';
import Contect from '../Navbar/Contact';



const Home = () => {
  return (<>
    <div className="relative h-screen">
      <video autoPlay loop muted className='shadow-2xl' >
        <source src={BgVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0  text-black z-10">
        <div className=''>
            <h1 className='lg:text-6xl md:text-5xl sm:text-4xl text-xl lg:pt-24 md:pt-10 sm:pt-4 pt-1 text-center font-bold text-white [text-shadow:4px_8px_12px_rgb(0,0,0,1)]'>Discover the Best <br/> 
            <span className='lg:text-4xl md:text-3xl sm:text-2xl text-sm lg:pt-12 md:pt-10 sm:pt-6 pt-2'>  Products for Your Needs </span></h1>
            <div className='flex flex-col justify-center items-center m-auto lg:p-[64px_256px] md:p-[32px_192px] sm:p-[24px_128px] p-[8px_24px]'>
            <p className=' bg-white w-auto lg:p-8 md:p-6 sm:p-4 p-1 lg:text-xl md:text-lg sm:text-base text-[8px] font-medium  text-center shadow-lg bg-opacity-75 rounded-md'> Explore our extensive range of high-quality products designed to meet all your needs. Whether youre looking for the latest trends or classic essentials, weve got you covered.</p>
            <div className='lg:m-16 md:m-14 sm:m-12 m-3 '>
            <NavLink to='/login'> <button className='font-medium tracking-wider grid grid-flow-col items-center border-none bg-black bg-opacity-50  hover:bg-opacity-75 hover:bg-white lg:text-2xl md:text-lg sm:text-base text-[10px] lg:p-[8px_32px] md:p-[6px_24px] sm:p-[4px_16px] p-[2px_8px] delay-100 transition duration-300 ease-in-out hover:text-black text-white rounded-[4px]'>Login  <FaArrowTrendUp className='lg:h-6 lg:w-6 lg:ml-2 sm:ml-2 ml-4px sm:h-5 sm:w-5 h-4 w-4 ml-1' /></button></NavLink>
            </div>
            </div>
        </div>
      </div>
      <Skills />
      <Contect/>
     
      <About/>
      <Footer />
    </div>
  </>)
}

export default Home
