import React from 'react'
import HeroSection from '../../src/Subcomponents/HeroSection';
import TopVilas from '../Subcomponents/TopVilas';
import Regiens from '../Subcomponents/Regiens';
import OurSpecialties from '../Subcomponents/OurSpecialties';
import Host from '../Subcomponents/Host';
import About from '../Subcomponents/About';
const Home = () => {

  return (
    <article className='page'>
      <HeroSection/>
      <TopVilas/>
      <Regiens/>
      <OurSpecialties/>
      <Host/>
      <About/>
    </article>
  )
}

export default Home
