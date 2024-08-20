/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"


const Searchbar = ({search}) => {


  return (
    <>
          <div className='h-auto top-60 w-auto max-w-full sm:p-0 p-[1px] m-0 bg-[#41a441]'>
          <div className='lg:p-3 md:p-2 p-1 flex items-center justify-evenly lg:gap-5 md:gap-4 sm:gap-2 gap-1'>
            <div className='flex justify-center items-center'>
              <input
              readOnly
                value={'Search Not Working... ❌'}
                type="text"
                name='text'
                className='lg:w-[500px] lg:p-[6px_12px] md:p-[4px_8px] sm:p-[2px_4px] p-[1px_4px] outline-none text-xs sm:text-sm md:text-base md:rounded-sm lg:mr-5 md:mr-4 sm:mr-2 mr-4'
                placeholder='Search Product... '
              />
              <button
                type='button'
                title="Show Only"
                className='hover:bg-green-500 border-none hover:text-white lg:p-[4px_8px] md:p-[3px_6px] sm:p-[2px_4px] p-[1px_2px] outline-none font-medium text-xs sm:text-sm md:text-base border-2 bg-white rounded-none md:rounded-sm'
              >
               {search}
              </button>
            </div>
            <div>
              <NavLink to='/cart'>
                <button
                  type='button'
                  className='hover:bg-green-500 border-none hover:text-white lg:p-[6px_8px] md:p-[3px_6px] sm:p-[2px_4px] p-[1px_2px] outline-none font-medium text-xs sm:text-sm md:text-base border-2 bg-white sm:block hidden rounded-none md:rounded-sm'
                >
                  Go To Cart
                </button>
              </NavLink>
            </div>
          </div>
      </div></>
  )
}

export default Searchbar