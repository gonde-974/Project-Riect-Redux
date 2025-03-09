import React from 'react'
import { useSelector } from 'react-redux'


function AboutUsPage() {
    const {messageForAboutUs} = useSelector((state)=>state.productStore)
  return (
    <div className='bg-red-500 h-[100px] text-center text-white text-bold mt-[15px] font-3xl'>About Us
    <div>
  
    <p>{messageForAboutUs.message}</p>
    </div>
    </div>
  )
}

export default AboutUsPage