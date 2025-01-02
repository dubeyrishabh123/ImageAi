import React from 'react'
import Header from '../components/Header'
import { assets } from '../assets/assets'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Testimonials from '../components/Testimonials'
import GenerateBtn from '../components/GenerateBtn'

const home = () => {
  return (
    <div>
       <Header/>
       <Steps/>
       <Description/>
       <Testimonials/>
       <GenerateBtn/>
    </div>
  )
}

export default home
