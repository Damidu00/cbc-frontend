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
import ProductInfo from './homePages/productInfo';

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
      <div>
        <Routes path="/">
        <Route path='/contactus' element={<ContactUs/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/productinfo/:id' element={<ProductInfo/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
}
