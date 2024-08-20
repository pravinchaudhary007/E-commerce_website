
import { SiMinutemailer } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { GiRotaryPhone } from "react-icons/gi";

const Header = () => {

    return (<>
        <div className=' h-auto w-auto  max-w-full lg:w-[60%] md:w-[80%]   rounded-ee-full rounded-ss-none sm:rounded-ss-full sm:rounded-ee-full bg-[#41a441]'>
            <div className='sm:flex flex-none justify-around items-center text-center sm:p-2 p-1 font-light text-xs sm:text-sm md:text-sm lg:text-base'>
                <div className='text-white flex items-center gap-0 sm:gap-1'>
                    <span className='h-6 w-6 grid ml-1 sm:ml-auto items-center sm:p-1 p-0'> <SiMinutemailer /> </span> <span className='sm:block hidden'>E-mail : </span>  <span className='hover:underline hover:underline-offset-4 hover:cursor-pointer hover:animate-pulse tracking-wider'> <NavLink to="mailto:pravinchaudhary88983@gmail.com?subject=Connect%20with%20Pravin%20-%20Your%20E-Commerce%20Experience%20Matters!&body=Hi%20Pravin,%0A%0AI%20came%20across%20your%20e-commerce%20website%20and%20I%E2%80%99m%20really%20impressed!%20I%E2%80%99d%20love%20to%20connect%20and%20discuss%20%5Binsert%20topic%20or%20feedback%5D.%20Looking%20forward%20to%20hearing%20from%20you!%0A%0ABest%20regards,%0A%5BYour%20Name%5D">
                        pravinchaudhary88983@gmail.com
                    </NavLink>
                    </span>
                </div>
                <div className='text-white flex items-center gap-0 sm:gap-1'>
                    <span className='h-6 w-6 grid ml-1 sm:ml-auto items-center sm:p-1 p-0'> <GiRotaryPhone /> </span> <span className='sm:block hidden'>Phone :</span> <span className='hover:underline hover:underline-offset-4 hover:cursor-pointer hover:animate-pulse tracking-wider'> <NavLink to="https://truecaller.com/r/5C2UHaOfsp/ha/com.truecaller"> 8320595327 </NavLink></span>
                </div>
            </div>
        </div>
    </>)
}

export default Header
