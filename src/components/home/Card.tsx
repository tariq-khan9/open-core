import React from 'react'
import { CardData } from '@/lib/types'
import { CiFileOn } from "react-icons/ci";
import { TiAttachment } from "react-icons/ti";

interface CardProps {
  data: CardData;
}

const icons:  { [key: string]: JSX.Element }  = {
  'TiAttachment': <TiAttachment size={16} />,
  'CiFileOn': <CiFileOn size={16} />,
};

const Card: React.FC<CardProps> = ({data}) => {
  return (
    <div className='max-w-[350px] font-dm-sans'>
      <img src={data.image} alt='image'/>
      <h1 className='text-[18px] md:text-[22px] font-medium  mt-2'>
      {data.text}
      </h1>
      <div className='flex flex-wrap'>{
        data.buttons.map((btn, i)=>(
          <button 
           key={i} 
           className='bg-[#F9FAFB] mt-2 p-1 px-2 text-gray-500 text-[12px] md:text-[14px] mr-2 flex flex-row items-center gap-1'>
            {btn.icon && icons[btn.icon]}
            {btn.text}
          </button>
        ))
        }
      
      </div>
    </div>
  )
}

export default Card
