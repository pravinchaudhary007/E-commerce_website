import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const [error, setError] = useState(false);
    const [input, setInput] = useState({
        name: '',
        email: '',
        password: '',
        cfmpassword: '',
    });

    const navigate = useNavigate();

    const handleClear = () => {
        setInput({
            name: '',
            email: '',
            password: '',
            cfmpassword: '',
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput(prev => ({ ...prev, [name]: value }));
    };

    const handleInputSubmit = (e) => {
        e.preventDefault();

        if (input.password !== input.cfmpassword) {
            setError(true);
            return; 
          }

        const users = JSON.parse(localStorage.getItem('users')) || [];

        users.push({
            name: input.name,
            email: input.email,
            password: input.password,
        });

        localStorage.setItem('users', JSON.stringify(users));
        navigate('/login');
    };

    return (
        <div className='min-h-screen h-auto lg:h-[765px] text-white w-auto bg-register bg-cover bg-no-repeat max-w-full flex flex-col items-center  justify-center'>

            <div className='md:m-4 sm:m-6 m-4 w-fit items-center ring-4 md:ring-6 border-2 border-transparent bg-black bg-opacity-50 ring-white lg:rounded-lg rounded-md'>
                <div className='lg:p-0 md:p-4 sm:p-4 p-2'>
                    <div className="lg:p-6 md:p-4 sm:p-2 p-4">
                        <h1 className="font-semibold tracking-wider lg:text-4xl md:text-2xl sm:text-lg text-lg text-center underline-offset-0 ">Register Now</h1>
                    </div>

                    <form onSubmit={handleInputSubmit} >
                        <div className=" lg:p-6 md:p-4 sm-p-4 p-2 grid grid-flow-row lg:gap-8 md:gap-6 gap-4 justify-center items-center ">
                            <div className="flex flex-col justify-center items-left md:gap-4 gap-2">
                                <label
                                    htmlFor="Enter Your Name... "
                                    className="lg:text-xl tracking-wide  md:text-lg sm:text-base text-sm"  >Enter Your Name </label>
                                <input
                                    type="text"
                                    value={input.name}
                                    onChange={handleInputChange}
                                    autoFocus
                                    required
                                    autoComplete="off"
                                    id="name"
                                    name="name"
                                    className='lowercase lg:w-[400px] md:w-[370px] sm:w-[320px] w-[220px]  md:text-lg sm:text-base text-xs md:p-2 p-[2px] tracking-tight outline-none lg:rounded-md rounded-sm  lg:pl-4 md:pl-3 sm:pl-2 pl-2 text-black placeholder:text-black font-semibold' />
                            </div>
                            <div className="flex flex-col justify-center items-left md:gap-4 gap-2 ">
                                <label
                                    htmlFor="Enter E-mail ID "
                                    className="lg:text-xl  md:text-lg sm:text-base text-sm tracking-wide" >Enter E-mail ID </label>
                                <input
                                    type="email"
                                    value={input.email}
                                    onChange={handleInputChange}
                                    id="email"
                                    required
                                    autoComplete="off"
                                    name="email"
                                    className='lg:w-[400px] md:w-[370px] sm:w-[320px] w-[220px]   md:p-2 lg:text-xl md:text-lg sm:text-base text-xs tracking-tight outline-none p-[2px] lg:rounded-md rounded-sm  lg:pl-4 md:pl-3 sm:pl-2 pl-1 text-black placeholder:text-black font-semibold ' />
                            </div>
                            <div className="flex flex-col justify-center items-left md:gap-4 gap-2 ">
                                <label htmlFor="Enter Password "
                                    className="lg:text-xl  md:text-lg sm:text-base text-xs tracking-wide" >Enter Password </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={input.password}
                                    required
                                    onChange={handleInputChange}
                                    id="password" 
                                     autoComplete="new-password"
                                    className='lg:w-[400px] md:w-[370px] sm:w-[320px] w-[220px]   md:p-2 p-[2px] lg:text-xl md:text-lg sm:text-base text-xs tracking-tight outline-none lg:rounded-md rounded-sm lg:pl-4 md:pl-3 sm:pl-2 pl-1 text-black placeholder:text-black font-semibold ' />
                            </div>
                            <div className="flex flex-col justify-center items-left md:gap-4 gap-2 ">

                                <label htmlFor="Enter Conform Password "
                                    className="lg:text-xl  md:text-lg sm:text-base text-xs tracking-wide" >Enter Conform PassWord</label>
                                <input
                                    type="password"
                                    name="cfmpassword"
                                    value={input.cfmpassword}
                                    required
                                    onChange={handleInputChange}
                                    id="cfmpassword"
                                    autoComplete="new-password"
                                    className='lg:w-[400px] md:w-[370px] sm:w-[320px] w-[220px]  md:p-2 p-[2px] lg:text-xl md:text-lg sm:text-base text-xs tracking-tight outline-none lg:rounded-md rounded-sm  lg:pl-4 md:pl-3 sm:pl-2 pl-1 text-black placeholder:text-black font-semibold ' />
                            </div>
                            <div className="md:-mt-4 -mt-2">

                                <p style={{ display: error ? 'block' : 'none' }}
                                    className="hidden text-red-600  lg:text-xl md:text-lg sm:text-base text-xs text-center">Password Not match </p>

                                <div className="flex justify-center  gap-[8px] items-center sm:pt-2 pt-1 md:pt-3">
                                    <NavLink to='/login'> <button type="button" className="md:font-bold  font-semibold hover:text-white hover:bg-black outline-none border-none md:p-[4px_16px] lg:w-[120px] md:w-[110px] text-center sm:w-[100px] w-[50px] p-[2px_4px] border-2 lg:text-xl md:text-lg sm:text-base text-xs tracking-tight lg:rounded-md rounded-sm  text-black bg-white">Back</button></NavLink>
                                    <button type="reset" onClick={handleClear} className="md:font-bold  font-semibold hover:text-white hover:bg-yellow-400  outline-none border-none md:p-[4px_16px] lg:w-[120px] md:w-[110px] text-center sm:w-[100px] w-[50px] p-[2px_4px] border-2 lg:text-xl md:text-lg sm:text-base text-xs tracking-tight lg:rounded-md rounded-sm  text-black bg-white">Clear</button>
                                    <button type="submit" className="hover:bg-green-500 border-none hover:text-white md:font-bold  font-semibold md:p-[4px_16px] lg:w-[120px] md:w-[110px] text-center sm:w-[100px] w-[50px] p-[2px_4px] border-2 lg:text-xl md:text-lg sm:text-base text-xs tracking-tight lg:rounded-md rounded-sm  text-black bg-white">Submit</button>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Register;