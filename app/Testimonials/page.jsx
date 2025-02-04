import React from 'react'
import TestimonialCard from '@/app/1components/testimonialCard.jsx'

const testimonials = () => {
  return (
    <div>
      <video autoPlay muted playsInline loop>
            <source src="https://ik.imagekit.io/kaavyarao05/TopNotch/nightbottletrick.MP4"/>
      </video>
      <header>
      <h1 className="-mt-[30%] vincendoFont font-extrabold text-4xl md:text-6xl duration-300 text-center">
          TESTIMONIALS
      </h1>
      <div className='mb-[30%]'/>
      </header>
      <h2 className='subheading'>What Out Clients Say</h2>
      <div className='p-20 flex-1'>
        <TestimonialCard
        review="Top Notch made our wedding extra special with their incredible cocktails. The guests were raving about the drinks all night!"
        reviewer="name"/>
      </div>
    </div>
  )
}

export default testimonials