import React, { useEffect, useState } from 'react'
import Logo from '../assets/vite.svg'
import { Link } from 'react-router-dom'

function NavBar() {
  return (

    <div className="h-12 px-4 w-full shadow-md shadow-slate-400 bg-linear-to-b from-blue-200 to-blue-400 flex items-center justify-between">

    <Link to="/" className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="h-8" />
        <p className="font-bold text-slate-900">ShortURL</p>
    </Link>

    <div className="flex gap-6">
        <p className="font-bold text-slate-800 hover:text-slate-950 cursor-pointer">
            Shorten URL
        </p>
        <p className="font-bold text-slate-800 hover:text-slate-950 cursor-pointer">
            About Us
        </p>
    </div>

    </div>
  )
}

export default NavBar