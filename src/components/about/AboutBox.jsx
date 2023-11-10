import React from 'react'

const AboutBox = () => {
  return (
    <div className='about_boxes grid'>
       <div className="about_box">
        <i className="about_icon icon-fire"></i>

        <div>
            <h3 className='about_title'>1</h3>
            <span className='about_subtitle'>Project completed</span>
        </div>
       </div>
       
       <div className="about_box">
        <i className="about_icon"></i>

        <div>
            <h3 className='about_title'>1000</h3>
            <span className='about_subtitle'>Cup of coffee</span>
        </div>
       </div>

       <div className="about_box">
        <i className="about_icon"></i>

        <div>
            <h3 className='about_title'>400</h3>
            <span className='about_subtitle'>Satisfied clients</span>
        </div>
       </div>
       
       <div className="about_box">
        <i className="about_icon"></i>

        <div>
            <h3 className='about_title'>11</h3>
            <span className='about_subtitle'>Nominees winner</span>
        </div>
       </div>
    </div>
  )
}

export default AboutBox
