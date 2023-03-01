import React from 'react'
import Header from '../../components/Header/Header';
import Popular from '../../components/Home/Popular/Popular';
import Slider from '../../components/Home/Slider/Slider';

import "./Home.scss"

const Home = () => {
  return (
    <div>
        <Header />
        <Slider />
        <Popular />
    </div>
  )
}

export default Home