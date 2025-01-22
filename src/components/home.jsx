import React from 'react'
import NewProducts from './newProducts'

export default function Home() {
  return (
          <div className="bg-gray-100 h-screen">
            <div data-aos="fade-down" className="relative h-[600px] overflow-hidden ml-5 mr-5">
              <div
                className="absolute w-full h-full flex transition-transform duration-1000 ease-in-out  "
                style={{ transform: `translateX(-${currentIndex * 100}%)` }} 
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="w-full  flex-shrink-0 mt-5 "
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundPosition: 'center',
                      backgroundSize:'cover',
                      backgroundRepeat : 'no-repeat',
                      width:'100%',
                      height:'100%'
                    }}
                  ></div>
                ))}
              </div>
            </div>
    
                <div className=' mt-8'>
                  <NewProducts/>
                </div>
    
          </div>
  )
}
