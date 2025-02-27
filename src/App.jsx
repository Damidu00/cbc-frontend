import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'
import AdminHomePage from './pages/adminHomePage'
import { Toaster } from 'react-hot-toast'
import SignupPage from './pages/signupPage'
import { GoogleOAuthProvider } from '@react-oauth/google'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <BrowserRouter>
      <GoogleOAuthProvider clientId='655168962490-dboua5p4ce3p3nsk2k9e8qdhv1isbc10.apps.googleusercontent.com'>
      <Toaster position="top-right"reverseOrder={false}/>
        <Routes path="/*">
          <Route path='/*' element={<HomePage/>} />
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/admin/*' element={<AdminHomePage/>}/>  
          <Route path='/signup' element={<SignupPage/>}/>
          
        </Routes>
        </GoogleOAuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
