import React from 'react'
import Background from'../assets/HeroSectionBg.jpg';

function HeroSection() {
  return (
    <div className="w-full h-[40vh] lg:h-[80vh] bg-slate-950/30 backdrop-blur-md" style={{ backgroundImage: `url(${Background})` }}>
        <div className="flex bg-slate-300/20 backdrop-blur-md h-[80vh] w-screen">
            <div className="my-4 md:my-10 px-8 py-6 mx-auto bg-white/20 h-fit shadow-md backdrop-blur-md lg:justify-center">
                <h1 className="font-bold font-mono text-3xl lg:text-6xl">
                    ShortURL
                </h1>
                <p className="text-md italic lg:text-xl px-2">
                    Shorten your links in seconds.
                </p>
                <p className="text-md italic lg:text-xl text-gray-800 px-4">
                    Fast, Reliable, and Easy-to-Use.
                </p>
            </div>
        </div>
    </div>
  )
}

export default HeroSection