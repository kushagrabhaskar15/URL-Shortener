import React from 'react'
import Logo from '../assets/vite.svg'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='h-10 bg-blue-200 flex'>
        <div className='grid grid-rows-1 grid-cols-3 items-center'>
            <Link to="/" className='col-span-1 col-start-1 flex items-center space-between-1'>
                <img src={Logo} alt="Logo" className='h-8'></img>
                <p className='font-bold text-blue-900'>ShortURL</p>
            </Link>
            <div className='col-span-1 col-start-3'>
                bye
            </div>
        </div>
    </div>
  )
}

export default NavBar