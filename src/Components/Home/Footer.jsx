import { MdContactPhone } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (<>
    <footer className="bg-footer h-auto bg-cover bg-no-repeat text-white  max-w-full lg:p-14 sm:p-8 items-center md:p-8 p-4">
        <div className="md:flex md:flex-row sm:grid sm:grid-cols-2 justify-between bg-inherit  text-center rounded-md shadow-lg backdrop-blur-lg  p-4 m-auto">
         
            <div className="w-full md:w-1/4 text-center lg:mb-6 md:mb-4 sm:mb-4 mb-2">
                <h3 className="lg:text-2xl md:text-xl sm:text-lg text-base font-bold  [text-shadow:3px_4px_7px_rgb(0,0,0,0.7)]  mb-4">Customer Service</h3>
                <ul className="md:text-base sm:text-sm text-xs font-medium">
                    <li><NavLink to="contact" className="hover:underline">Contact Us</NavLink></li>
                    <li><NavLink to="/" className="hover:underline">Returns</NavLink></li>
                    <li><NavLink to="/shipping" className="hover:underline">Shipping Information</NavLink></li>
                    <li><NavLink to="/about" className="hover:underline">FAQ</NavLink></li>
                </ul>
            </div>
            <div className="w-full md:w-1/4 text-center lg:mb-6 md:mb-4 sm:mb-4 mb-2">
                <h3 className="lg:text-2xl md:text-xl sm:text-lg text-base  font-bold  [text-shadow:3px_4px_7px_rgb(0,0,0,0.7)]  mb-4">About Us</h3>
                <ul className="md:text-base sm:text-sm text-xs font-medium">
                    <li><NavLink to="/about" className="hover:underline">Company Info</NavLink></li>
                    <li><NavLink to="/" className="hover:underline">Careers</NavLink></li>
                    <li><NavLink to="/" className="hover:underline">Press</NavLink></li>
                </ul>
            </div>
            <div className="w-full md:w-1/4 text-center lg:mb-6 md:mb-4 sm:mb-4 mb-2">
                <h3 className="lg:text-2xl md:text-xl sm:text-lg text-base font-bold  [text-shadow:3px_4px_7px_rgb(0,0,0,0.7)]  mb-4">Policies</h3>
                <ul className="md:text-base sm:text-sm text-xs font-medium">
                    <li><NavLink to="contact" className="hover:underline ">Privacy Policy</NavLink></li>
                    <li><NavLink to="about" className="hover:underline ">Terms of Service</NavLink></li>
                    <li><NavLink to="about" className="hover:underline ">Cookie Policy</NavLink></li>
                </ul>
            </div>

            <div className="w-full md:w-1/4 text-center  lg:mb-6 md:mb-4 sm:mb-4 mb-2">
                <h3 className="lg:text-2xl md:text-xl sm:text-lg text-base  font-bold   [text-shadow:3px_4px_7px_rgb(0,0,0,0.7)] mb-4">Follow Us</h3>
                <div className="flex items-center justify-center space-x-3 ">
             <NavLink to="https://truecaller.com/r/5C2UHaOfsp/ha/com.truecaller"> < MdContactPhone className="h-6 w-6 shadow-lg"/></NavLink> 
             <NavLink to="https://x.com/PRAVINBHAI477"> <FaSquareXTwitter   className="h-6 w-6 shadow-lg"/></NavLink> 
              <NavLink to="https://www.instagram.com/pravin_chaudhary_2.0_?utm_source=qr&igsh=MWF1b2F4Y3cyamgxOQ=="> <FaInstagramSquare className="h-6 w-6 shadow-lg"/>  </NavLink> 
                <NavLink to="https://www.linkedin.com/in/pravin-chaudhary-18592a26b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <IoLogoLinkedin className="h-6 w-6 shadow-lg"  /></NavLink>
                </div>
            </div>
        </div>
     
        <div className=" text-center  flex justify-around items-center lg:p-6 lg:m-6 md:p-4 md:m-4  sm:p-2 sm:m-2 p-[4px] m-[4px] lg:gap-12 md:gap-10 sm:gap-8 gap-4 min-w-full ">
            <p className="lg:text-base md:text-base  sm:text-sm  text-xs ">&copy; 2024 E-Commerce Shop. All rights reserved.</p>
            <p className="lg:text-base md:text-base  sm:text-sm  text-xs ">Address: 111 , paldi , Ahmedabad , Gujarat , 385001</p>
        </div>
      
</footer>
</>)
}

export default Footer
