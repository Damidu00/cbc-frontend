import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'
import AdminHomePage from './pages/adminHomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/*' element={<h1>404 error not found</h1>} />
          <Route path='/admin' element={<AdminHomePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
