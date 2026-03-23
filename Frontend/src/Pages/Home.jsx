import React from 'react'
import HeroSection from '../components/HeroSection'
import Form from '../components/Form'
import About from '../components/About'

function Home() {
  return (
    <div className=''>
      <div>
        <HeroSection/>
      </div>
      <div>
        <Form/>
      </div>
      <div>
       <About/>
      </div>
    </div>
  )
}

export default Home