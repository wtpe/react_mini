import React from 'react'
import './services.css'
import gaumeo from '../../assests/gaumeo.webp'

const data=[
  {
    id:1,
    image:gaumeo,
    title: 'UI/UX design',
    description:
    'alo alo alo'
  },
  {
    id:2,
    image:gaumeo,
    title: 'Web Development',
    description:
    'alo alo alo'
  },{
    id:3,
    image:gaumeo,
    title: 'Photography',
    description:
    'alo alo alo'
  },
]

const Services = () => {
  return (
    <section className='services container section' id='services'>
      <h2 className='section_title'>Services</h2>

      <div className="services_container grid">
        {data.map(({id, image,title,description})=>{
          return(
            <div className="services_card" key={id}>
              <img src={image} alt="" className="services_img" />
              <h3 className='services_title'>{title}</h3>
              <p className='serviecs_decription'>{description}</p>
            </div>
          )
        })}
      </div>
    </section>
    )
}

export default Services
