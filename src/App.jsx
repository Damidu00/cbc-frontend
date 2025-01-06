import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'
import AdminHomePage from './pages/adminHomePage'
import { Toaster } from 'react-hot-toast'
import SignupPage from './signupPage'


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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
