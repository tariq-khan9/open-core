import React from 'react'

const Ideas: React.FC = () => {
  return (
    <div className='my-12'>
        <div className='bg-primary p-16 w-full  rounded-xl font-dm-sans text-white flex flex-col md:flex-row items-center '>
            <div className='w-full sm:w-[60%] p-8'>
               <h1 className='text-[30px] md:text-[40px] font-normal max-w-[350px] md:leading-10'>Transforming your 
                <span className='font-bold'> Ideas into reality </span> 
                </h1>

                <p className='mt-4 text-[11px] md:text-[12px] max-w-[270px] sm:max-w-[330px]'>
                Lets build something extraordinary together to captivate your audience.
                </p>
            </div>

            <div className='w-full sm:w-[40%] flex justify-center items-center'>
                <div className='border-2 border-white h-44 w-44 rounded-full flex justify-center items-center'>
                    <p className='text-center max-w-20 text-[16px]'>Lets Work Together!</p>
                </div>
           </div>

        </div>
      
    </div>
  )
}

export default Ideas
