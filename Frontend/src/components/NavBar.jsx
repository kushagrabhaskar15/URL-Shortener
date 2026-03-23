import React, { useEffect, useState } from 'react'
import Logo from '../assets/vite.svg'
import { Link } from 'react-router-dom'

function NavBar() {
  return (

    <div className="h-12 px-4 w-full relative z-100 shadow-md shadow-slate-400 bg-linear-to-b from-blue-200 to-blue-400 flex items-center justify-between">

    <a href='/home' className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="h-8" />
        <p className="font-bold text-slate-900">ShortURL</p>
    </a>

    <div className="flex gap-6">
        <a href='#form'>
            <p className="font-bold text-slate-800 hover:text-slate-950 cursor-pointer">
                Shorten URL
            </p>
        </a>
        <a href='#about'>
            <p className="font-bold text-slate-800 hover:text-slate-950 cursor-pointer">
                About Us
            </p>
        </a>
    </div>

    </div>
  )
}

export default NavBar