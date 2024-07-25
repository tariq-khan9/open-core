import React from 'react'

const Ideas: React.FC = () => {
  return (
    <div className='my-12'>
        <div className='bg-primary p-16 w-full  rounded-xl font-dm-sans text-white flex flex-row'>
            <div className='w-full sm:w-[60%] p-8'>
               <h1 className='text-[40px] font-normal max-w-[350px] leading-10'>Transforming your 
                <span className='font-bold'> Ideas into reality </span> 
                </h1>

                <p className='mt-4 text-[12px] max-w-[330px]'>
                Lets build something extraordinary together to captivate your audience.
                </p>
            </div>

            <div className='w-full sm:w-[40%] flex justify-center items-center'>
                <div className='border-2 border-white h-40 w-40 rounded-full flex justify-center items-center'>
                    <p className='text-center max-w-20'>Let’s Work Together!</p>
                </div>
           </div>

        </div>
      
    </div>
  )
}

export default Ideas
