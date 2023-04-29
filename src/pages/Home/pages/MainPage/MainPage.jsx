import React from 'react'
import AboutUs from './components/AboutUs'
import HeroSection from './components/HeroSection'
import Testimonials from './components/Testimonials'

const MainPage = () => {
  return (
    <section className="max-w-6xl mx-auto bg-white dark:bg-gray-900">
        <HeroSection />
        <Testimonials />
        <AboutUs />
    </section>
  )
}

export default MainPage
