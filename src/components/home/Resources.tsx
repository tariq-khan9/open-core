'use client'
import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import { resourceButtons, cardData } from '@/lib/const';
import Card from './Card';


const Resources: React.FC = () => {

  const data = cardData;

const [selectedButton, setSelectedButton] = useState(resourceButtons[0]);

  return (
    <div className='w-full'>
          <div className='relative'>
              <IoSearchOutline className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600' />
              <input 
                placeholder='Search for resources and tutorials' 
                className='w-full border border-gray-300 rounded-md p-3 pl-8 text-[12px] font-dm-sans'
                />
           </div>

          <div className='w-full flex flex-row justify-between mt-6'>
              <div>
                  {
                      resourceButtons.map((btn, i)=>(
                      <button 
                        key={i}
                        className={`resource-btn mr-2 ${btn === selectedButton ? 'bg-[#EDF2F5] text-gray-700 border-none' : ''}`}
                        onClick={() => setSelectedButton(btn)}
                        >
                          {btn}
                      </button>))
                  }
              </div>
              <div>
                <button className='resource-btn flex items-center'><CiFilter size={16} color='black'/><span className='ml-2'>Filter</span></button>
              </div>
          </div>

          <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-10'>
            { data.map((btn, i )=>(
              <Card key={i} data={btn}/>
            ))
            }
          </div>
      
    </div>
  )
}

export default Resources
