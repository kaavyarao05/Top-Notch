import React from 'react'
import TestimonialCard from '@/app/1components/testimonialCard.jsx'
import Videoheader from '../1components/videoheader'

const testimonials = () => {
  return (
    <div>
      <Videoheader
      link="https://ik.imagekit.io/kaavyarao05/TopNotch/nightbottletrick.MP4"
      heading="TESTIMONIALS"
      />
      <h2 className='subheading text-cyan'>What Our Clients Say</h2>
      <div className='p-10 sm:p-20 flex-1'>
        <TestimonialCard
        review="Top Notch made our wedding extra special with their incredible cocktails. The guests were raving about the drinks all night!"
        reviewer="name"/>
      </div>
    </div>
  )
}

export default testimonials