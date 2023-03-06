import React from 'react'
import Header from '../../components/Header/Header';
import About from '../../components/Home/About/About';
import Popular from '../../components/Home/Popular/Popular';
import Slider from '../../components/Home/Slider/Slider';

import "./Home.scss"

const Home = () => {
  return (
    <div>
        <Header />
        <Slider />
        <Popular />
        <About />
    </div>
  )
}

export default Home