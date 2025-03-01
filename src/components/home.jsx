import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import HomepageSecondSection from './homepageSecondSection';
import CertificateSection from './newProducts';

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  
   const images = [
      'https://lyycwptpupzvjwofdegk.supabase.co/storage/v1/object/public/images//ban1.png',
      'https://lyycwptpupzvjwofdegk.supabase.co/storage/v1/object/public/images//ban2.png',
      'https://lyycwptpupzvjwofdegk.supabase.co/storage/v1/object/public/images//bg-3.png',
      'https://lyycwptpupzvjwofdegk.supabase.co/storage/v1/object/public/images//ban4.png'
    ]
    
  
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); 
      }, 3000); 
  
      return () => clearInterval(interval); 
    }, [images.length]);


  return (
    <>
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

          </div>
            <div className='-mt-5'>
              <HomepageSecondSection/>
            </div>
    
            <div className=' mt-8'>
              <CertificateSection/>
            </div>
    
          
          </>
  )
}
