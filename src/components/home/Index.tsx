import React from 'react'
import Hero from './Hero'
import Resources from './Resources'
import Ideas from './Ideas'
import Footer from '../Footer'

const Index: React.FC = () => {
  return (
    <div>
      <div className='w-full p-4 md:px-20 z-10'>
      <Hero/>
      <Resources/>
      <Ideas/>
      </div>
    </div>
  )
}

export default Index
