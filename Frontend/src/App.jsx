import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {

  return (
    <Router>
      <NavBar/>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      <Footer/>
    </Router>
  )
}

export default App
