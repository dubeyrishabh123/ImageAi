import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create Ai Images</h1>
      <p className='text-gray-500 mb-8'>Turn your imagination into visuals</p>

      <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
        <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg' />
      
      <div>
      <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the Ai-Powered Text to Image Generator</h2>
      <p className='text-gray-600 mb-4'>The Image-to-Text Generator is an AI-powered tool designed to extract
         and convert text from images with precision. It supports multiple languages, 
         integrates OCR technology, and provides seamless usability for applications
          like document digitization, data extraction, and accessibility solutions. 
          The project emphasizes accuracy, speed, and user-friendly implementation.</p>
          <p className='text-gray-600 mb-4'>
          This Image-to-Text Generator simplifies text extraction from images,
           enabling efficient data processing for businesses, researchers, and individuals. 
          
          </p>
          </div>
          </div>
    </div>
  )
}

export default Description