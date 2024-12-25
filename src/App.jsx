import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
