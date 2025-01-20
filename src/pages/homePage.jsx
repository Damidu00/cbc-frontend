import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavigationBar from '../components/navigationBar';
import Footer from '../components/footer';
import NewProducts from '../components/newProducts';
import { Route, Routes } from 'react-router-dom';
import ContactUs from './homePages/contactUs';
import Products from './homePages/products';
import AboutUs from './homePages/aboutUs';

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

 const images = [
    'public/ban1.png',
    'public/ban2.png',
    'public/ban3.png',
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); 
    }, 5000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
      </Routes>
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
      <Footer />
    </>
  );
}
