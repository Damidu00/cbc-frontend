import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'
import AdminHomePage from './pages/adminHomePage'
import { Toaster } from 'react-hot-toast'
import SignupPage from './pages/signupPage'
import ContactUs from './pages/homePages/contactUs'
import Products from './pages/homePages/products'
import AboutUs from './pages/homePages/aboutUs'
import ProductInfo from './pages/homePages/productInfo'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <BrowserRouter>
      <Toaster position="top-right"reverseOrder={false}/>
        <Routes path="/*">
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/admin/*' element={<AdminHomePage/>}/>  
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/productinfo/:id' element={<ProductInfo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
