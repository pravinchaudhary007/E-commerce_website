/* eslint-disable react/no-unescaped-entities */

import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [error, setError] = useState(false);
  const [input, setInput] = useState({ email: '', password: '' });
  
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput(prev => ({ ...prev, [name]: value }));
  };


  const handleSubmit = (e) => {
    
    e.preventDefault();

    let users;
    try {
      const storedData = localStorage.getItem('users');
      users = storedData ? JSON.parse(storedData) : [];
    } catch (error) {
      console.error("Error parsing users data from localStorage", error);
      setError(true);
      return;
    }

    const user = users.find(u => u.email === input.email && u.password === input.password);
    if (user) {
      alert("Congratulations 🎉 Logged in Successfully ✨");

      navigate('/');
    } else {
      setError(true);
    }
  
  };

  const handleClear = () => {
    setInput({ email: '', password: '' });
    setError(false);
  };


  return (
    <div className='h-screen text-white w-auto bg-login bg-cover bg-no-repeat max-w-full lg:p-10 md:p-8 sm:p-6 p-4 flex flex-col items-center  justify-center'>
       
       <div className=' w-fit items-center ring-4 md:ring-6 border-2 border-transparent  ring-blue-500/80 lg:rounded-lg rounded-md backdrop-blur-md'>
          <div className='lg:m-8 md:m-8 sm:m-4 m-auto'>
                <div className="lg:p-10 md:p-8 sm:p-4 p-4">
               <h1 className="font-semibold tracking-wider lg:text-4xl md:text-2xl sm:text-lg text-lg text-center underline-offset-0 ">Login Now</h1>
               </div>
          
          <form  onSubmit={handleSubmit}>
               <div className=" lg:p-8 md:p-8 sm-p-4 p-4 grid grid-flow-row lg:gap-8 md:gap-6 gap-4 justify-center items-center ">
                <div className="flex flex-col justify-center items-left md:gap-4 gap-2">
                  <label htmlFor="Enter E-mail ID " className="lg:text-xl tracking-wide  md:text-lg sm:text-base text-sm" >Enter E-mail ID </label>
                <input 
                type="email" 
                id="email"
                value={input.email}
                onChange={handleInputChange}
                name="email"
                required
                autoFocus 
                className='lowercase lg:w-[400px] md:w-[370px] sm:w-[320px] w-auto  md:text-lg sm:text-base text-sm md:p-2 p-1 tracking-tight outline-none lg:rounded-md rounded-sm lg:pl-4 md:pl-3 sm:pl-2 pl-2 text-black placeholder:text-black font-semibold' />
                </div>
                <div 
                className="flex flex-col justify-center items-left md:gap-4 gap-2 ">
                <label 
                htmlFor="Enter PassWord" 
                className="lg:text-xl  md:text-lg sm:text-base text-sm tracking-wide" >Enter Password </label>
                 <input 
                 type="password" 
                 name="password"
                 id="password"
                 value={input.password}
                 required
                 onChange={handleInputChange}
                 autoComplete = "current-password"
                 className='lg:w-[400px] md:w-[370px] sm:w-[320px] w-auto  md:p-2 p-1 lg:text-xl md:text-lg sm:text-base text-sm tracking-tight outline-none lg:rounded-md rounded-sm lg:pl-4 md:pl-3 sm:pl-2 pl-1 text-black placeholder:text-black font-semibold '  />
                 </div>
                  <div className="md:-mt-4 -mt-2">
                 <p style={{display:error?'block':'none'}} className="hidden text-red-600 lg:text-xl md:text-lg sm:text-base text-sm text-center">Invalid email or password</p>
                 <div className="flex justify-around items-cente sm:pt-2 pt-1 md:pt-3">
                 <button type='button' onClick={handleClear}   className="md:font-bold  font-semibold hover:text-white hover:bg-red-600  outline-none border-none md:p-[4px_16px] lg:w-[120px] md:w-[110px] text-center sm:w-[100px] w-[80px] p-[2px_4px] border-2 lg:text-xl md:text-lg sm:text-base text-sm tracking-tight lg:rounded-md rounded-sm  text-black bg-white">Clear</button>
                 <button type="submit"  className="hover:bg-green-500 border-none hover:text-white md:font-bold  font-semibold md:p-[4px_16px] lg:w-[120px] md:w-[110px] text-center sm:w-[100px] w-[80px] p-[2px_4px] border-2 lg:text-xl md:text-lg sm:text-base text-sm tracking-tight lg:rounded-md rounded-sm  text-black bg-white">Submit</button>
                 </div>
                 </div>


                 <div className="flex justify-center items-center lg:gap-4 lg:text-xl md:text-lg sm:text-base text-sm tracking-tight lg:rounded-md rounded-sm  ">
                    <p>Don't have an account ? <span className="hover:underline text-green-500 active:text-yellow-300 visited:text-white "> <NavLink to="/register"> Register here</NavLink> </span></p>
                 </div>
               </div>

               
          </form>

          </div>
       </div>
    </div>
  )
}

export default Login
