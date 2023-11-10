import React from 'react'
import './testimonials.css'
import soc from '../../assests/soc.png'
import gau from '../../assests/gaumeo.webp'
import meo from '../../assests/logomeo1.png'
import { Carousel } from 'antd'
const data = [
  {
    id: 1,
    image: soc,
    title: 'Thành Ngô',
    subtitle: 'Product designer at ABC',
    comment:
      'I enjoy working with the them and learn so much. You guys make the process fun and interesting. Good luck!'
  },
  {
    id: 2,
    image: gau,
    title: 'Thành Ngô',
    subtitle: 'Product designer at ABC',
    comment:
      'I enjoy working with the them and learn so much. You guys make the process fun and interesting. Good luck!'
  },
  {
    id: 3,
    image: meo,
    title: 'Thành Ngô',
    subtitle: 'Product designer at ABC',
    comment:
      'I enjoy working with the them and learn so much. You guys make the process fun and interesting. Good luck!'
  }
]

const Testimonials = () => {
  return (
    <section className="testimonials container section">
      <h2 className="section_title">Client & Reviews</h2>
      <Carousel autoplay dots={true} draggable pauseOnHover={true} className="testimonials_container grid">
        {data.map(({ id, image, title, subtitle, comment }) => {
          console.log(id);
          return (
            <div className="testimonial_item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonials_title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </div>
          )
        })}
      </Carousel>
    </section>
  )
}

export default Testimonials
