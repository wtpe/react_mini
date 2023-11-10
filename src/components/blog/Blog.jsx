import React from 'react'
import './blog.css'
import img from '../../assests/gaumeo.webp'
const Blog = () => {
  return (
    <section className="blog container section" id='blog'>
      <h2 className="section_title">Latest Posts</h2>

      <div className="blog_container grid">
        <div className="blog_card">
          <div className="blog_thumb">
            <a href="#"><span className='blog_category'>Reviews</span></a>
            <a href="#"><img src={img} alt="" className='blog_img'/></a>
          </div>
          <div className="blog_details">
            <h3 className="blog_title">5 Best App Development Tool for Your Projects</h3>
            <div className="blog_meta">
              <span>09 February, 2022</span>
              <span className='blog_dot'>.</span>
              <span>Bolby</span>
            </div>
          </div>
        </div>

        <div className="blog_card">
          <div className="blog_thumb">
            <a href="#"><span className='blog_category'>Tutorial</span></a>
            <a href="#"><img src={img} alt="" className='blog_img'/></a>
          </div>
          <div className="blog_details">
            <h3 className="blog_title">Common Misconceptions About Payment</h3>
            <div className="blog_meta">
              <span>09 February, 2022</span>
              <span className='blog_dot'>.</span>
              <span>Bolby</span>
            </div>
          </div>
        </div>

        <div className="blog_card">
          <div className="blog_thumb">
            <a href="#"><span className='blog_category'>Business</span></a>
            <a href="#"><img src={img} alt="" className='blog_img'/></a>
          </div>
          <div className="blog_details">
            <h3 className="blog_title">Things to know about startup business</h3>
            <div className="blog_meta">
              <span>09 February, 2022</span>
              <span className='blog_dot'>.</span>
              <span>Bolby</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
