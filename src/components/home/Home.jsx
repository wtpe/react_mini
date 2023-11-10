import React from 'react'
import './home.css'
import avt from '../../assests/thanh1.jpg'
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
const Home = () => {
  return (
    <section className='home container' id='home'>
      <div className='intro'>
        <img src={avt} alt='' className='home_img'/>
        <h1 className='home_name'>Ngô Tiến Thành</h1>
        <span className='home_education'>I'm a Front-End developer</span>
        <HeaderSocials/>
        <a href='#contact' className='btn'>Hire Me</a>
        <ScrollDown/>
      </div>
      
    </section>
  )
}

export default Home
