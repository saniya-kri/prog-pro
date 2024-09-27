
import './App.css'

import React from 'react'
import Hero from './components/Hero'
import Exploremore from './components/Exploremore'
import Testimonial from './components/Testimonial'
import Security from './components/Security'
import Challenges from './components/Challenges'
import PricingListting from './components/PricingListting'
import Footer from './components/Footer'



const App = () => {
  return (
    <div className='w-full h-screen overflow-x-hidden'>
      <Hero/>
      <Exploremore/>
      <Testimonial/>
      <Security/>
      <Challenges/>
      <PricingListting/>
      <Footer/>
    </div>
  )
}

export default App

