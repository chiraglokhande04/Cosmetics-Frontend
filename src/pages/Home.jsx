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

const Home = () => {
  return (
    <div className='bg-gray-100'>
        <Hero/>
        <Contact/>
        <Info/>
        <ExploreProducts/>
        <RetinolSection/>
        <FeatureSection/>
        <BeforeAfterSlider/>
        <TeamSection/>
        <BottomHero/>
    </div>
  )
}

export default Home