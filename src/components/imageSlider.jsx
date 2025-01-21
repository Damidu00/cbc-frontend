import React, { useState } from 'react'

export default function ImageSlider(props) {
  const images = props.images
  const [activeImage,setActiveImage] = useState(0)


  return (
    <>
      <div className='w-full h-[400px] flex items-center flex-col  '>
      <img src={props.images[activeImage]} className='w-full object-cover rounded-xl'/>
      
    </div>
    <div className=' w-full h-[130px] -mt-5 '>
      <div className='w-full h-full flex items-center justify-center overflow-hidden'>
        {images.map((image,index)=>(
          <img src={image} key={index} onClick={()=> setActiveImage(index)} className='w-28 h-28 object-cover mx-2 rounded-xl cursor-pointer' />
        ))}
      </div>
    </div>
    </>
    
  )
}
