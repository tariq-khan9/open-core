import React from 'react'
import { HiBars3 } from "react-icons/hi2";

const Navbar: React.FC = () => {
  return (
    <div className='navbar z-50'>   
        <div className=' flex flex-row '>
            <button className='bg-white p-[10px] border border-gray-300 pl-[12px] rounded-l-full'>
                <img src='/images/logo.svg' alt='image' className='w-6 h-6'/>
            </button>
            <button className='bg-white p-2 pr-[10px]   border-y border-r border-gray-300  rounded-r-full'>
                 <HiBars3 size={25} color='primary'/>
            </button>
        </div>
    </div>
  )
}

export default Navbar
