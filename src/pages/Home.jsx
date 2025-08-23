import React from 'react'
import Hero from '../components/Home/Hero'
import Contact from '../components/Home/Contact'
import Info from '../components/Home/Info'
import ExploreProducts from '../components/Home/ExploreProducts'
import RetinolSection from '../components/Home/RetinolSection'
import FeatureSection from '../components/Home/FeatureSection'
import BeforeAfterSlider from '../components/Home/BeforeAfterSlider'
import TeamSection from '../components/Home/TeamSection'
import BottomHero from '../components/Home/BottomHero'
import Footer from '../components/Home/Footer'  

import bgImg from '../assets/bg.png' // Adjust the path as necessary

const Home = () => {
  return (
    <div className="bg-gray-100 overflow-hidden">
      <Hero />

      {/* Wrap Contact, Info and ExploreProducts in a div with background image */}
      <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(${bgImg})` }}>
  {/* Overlay with opacity */}
  <div className="absolute inset-0 bg-white opacity-95"></div>

  {/* Content */}
  <div className="relative">
    <Contact />
    <Info />
    <ExploreProducts />
  </div>
</div>


      <RetinolSection />
      <FeatureSection />
      <BeforeAfterSlider />
      <TeamSection />
      <BottomHero />
      <Footer />
    </div>
  )
}

export default Home