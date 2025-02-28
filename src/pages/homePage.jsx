import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import NavigationBar from '../components/navigationBar';
import Footer from '../components/footer';
import NewProducts from '../components/newProducts';
import { Route, Routes } from 'react-router-dom';
import ContactUs from './homePages/contactUs';
import Products from './homePages/products';
import AboutUs from './homePages/aboutUs';
import ProductInfo from './homePages/productInfo';
import Home from '../components/home';
import CartPage from './homePages/cartPage';
import Feedbacks from './homePages/feedbacks';
import AddFeedback from './homePages/addFeedback';
import AddProductFeedback from './homePages/addProductFeedback';
import Shipping from './homePages/shipping';
import Orders from './homePages/orders';

export default function HomePage() {
  

  return (
    <>
      <NavigationBar />
      <div>
        <Routes path="/">
          <Route path='/contactus' element={<ContactUs/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/productinfo/:id' element={<ProductInfo/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/feedbacks' element={<Feedbacks/>}/>
          <Route path='/addfeedback' element={<AddFeedback/>}/>
          <Route path='/addproductfeedback' element={<AddProductFeedback/>}/>
          <Route path='/shipping' element={<Shipping/>}/>
          <Route path='/orders' element={<Orders/>}/>
        </Routes>
      </div>
      {/* <Home/> */}

      <Footer />
    </>
  );
}
