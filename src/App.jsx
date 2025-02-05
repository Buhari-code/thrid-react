import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'

const App = () => {
  return (
    <BrowserRouter>
    
    <Navbar />
    <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path='/about' element={<About />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App