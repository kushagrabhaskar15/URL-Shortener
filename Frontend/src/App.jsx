import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {

  return (
    <Router>
      <NavBar/>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
        </Routes>
      <Footer/>
    </Router>
  )
}

export default App
