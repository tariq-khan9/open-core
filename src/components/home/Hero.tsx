import React from 'react'

const Hero: React.FC = () => {
  return (
    <div className='w-full mt-20 px-auto md:p-20 flex justify-center items-center  mb-4'>
        <div className='w-[350px] md:w-[400px] '>
            <h1 className='font-dm-sans text-primary text-center sm:text-start  font-semibold text-[20px] md:text-[35px]  md:leading-10 mb-4'>
            Your Ultimate Resource Hub for Digital Success
            </h1>
            <p className='font-dm-sans font-medium text-gray-600 text-[12px] md:text-[14px] text-center'>
            Explore our comprehensive library of tools and templates for developers, designers, marketers, and branding experts.
            </p>

        </div>
      
    </div>
  )
}

export default Hero
