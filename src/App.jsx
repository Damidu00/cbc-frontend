import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'
import AdminHomePage from './pages/adminHomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <BrowserRouter>
        <Routes path="/*">
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/admin/*' element={<AdminHomePage/>}/>
         
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
