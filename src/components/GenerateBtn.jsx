import React from 'react'
import { assets } from '../assets/assets'

const GenerateBtn = () => {
  return (
    <div>
      <h1 className='text-2xl md:text-3xl lg:text-4xl 
      mt-4 font-semibold text-neutral-800 py-6 md:py-16'>See the magic. Try Now</h1>
      <button className=''>Generate Images
       <img src={assets.star_group} alt=""  className='h-6'/>
      </button>
    </div>
  )
}

export default GenerateBtn
