import React from 'react'
import { AiOutlineFacebook } from "react-icons/ai";
import { navLinks } from '@/lib/const';
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

// const social = [
//   <CiInstagram/>,
//   <AiOutlineFacebook/>,
//   <CiTwitter/>,
//   <CiLinkedin/>
// ]


const Footer: React.FC = () => {
  return (
      <div className='w-full mt-10 px-20 p-20 bg-primary text-black flex justify-center'>
            <div className='bg-white max-w-[1090px] pt-12   px-12 w-full  rounded-xl font-dm-sans '>
                    <div className='w-full flex flex-col sm:flex-row justify-between'>
                      <div className='w-[170px] font-dm-sans text-black '>
                        <h2 className='text-[14px] font-bold'>
                          Say Hello!
                        </h2>

                        <p className='text-[13px]'>
                          opencoregroup@gmail.com
                        </p>

                        <div className='flex flex-row  justify-between mt-4 '>
                          {/* {social.map((icon, index)=>(
                          <div key={index}  className='bg-[#F2F4F7] w-6 h-6 flex justify-center items-center'>
                            
                              {icon}
                              </div>
                            ))} */}

                            <div  className='bg-[#F2F4F7] w-6 h-6 flex justify-center items-center'>
                              <CiInstagram/>
                            </div>
                            <div  className='bg-[#F2F4F7] w-6 h-6 flex justify-center items-center'>
                              <AiOutlineFacebook/>
                            </div>
                            <div  className='bg-[#F2F4F7] w-6 h-6 flex justify-center items-center'>
                              <CiTwitter/>
                            </div>
                            <div  className='bg-[#F2F4F7] w-6 h-6 flex justify-center items-center'>
                              <CiLinkedin/>
                            </div>
                        </div>
                      
                        
                      </div>

                      <div className='text-black grid grid-cols-2 text-[12px] gap-x-4 mt-8 sm:mt-0'>
                          {
                            navLinks.map((btn, i )=>(
                              <button className='text-left' key={i}>{btn}</button>
                            ))
                          }
                      </div>


                    </div>

                    <div className='flex flex-col sm:flex-row items-center sm:justify-between mt-16'>
                        <p className='text-[12px]'>
                          Toronto, ON Canada
                        </p>

                        <p className='text-[12px]'>
                            OpenCore. All Rights Reserved
                        </p>
                    </div>

                    <div className='w-full relative  flex justify-center items-end mt-36'>
                      <img src='/images/logo-text.svg' alt='image' className='w-[60%] absolute bottom-[-5px] sm:bottom-[-10px] md:bottom-[-20px]'/>
                    </div>

            </div>

      
      </div>
  )
}

export default Footer
