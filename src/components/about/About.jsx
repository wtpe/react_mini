import React from 'react'
import './about.css'
import avt from '../../assests/logomeo1.png'
import AboutBox from './AboutBox'

const About = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className='section_title'> About Me </h2>
      <div className="about_container grid">
        <img src={avt} alt="" className="about_img" />
        <div className="about_data grid">
          <div className='about_info'>
            <p className='about_description'>I am Thanh, I'm from Ha Noi, Viet Nam</p>
            <a href='' className='btn'>Download CV</a>
          </div>

          <div className='about_skill grid'>
            <div className='skill_data'>
              <div className='skill_titles'>
                <h3 className='skills_name'>Development</h3>
                <span className='skill_number '>90%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage development"></span>
              </div>
            </div>

            <div className='skill_data'>
              <div className='skill_titles'>
                <h3 className='skills_name'>UI/UX design</h3>
                <span className='skill_number '>80%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage ui_design"></span>
              </div>
            </div>

            <div className='skill_data'>
              <div className='skill_titles'>
                <h3 className='skills_name'>Photography</h3>
                <span className='skill_number '>60%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage photography"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox/>
    </section>
  )
}

export default About
