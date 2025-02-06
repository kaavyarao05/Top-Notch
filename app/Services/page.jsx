import React from 'react';
import Card from '@/app/1components/card.jsx';
import weddingPhoto from'@/public/wedding.JPG';
import fire from'@/public/fire.JPG';

import Videoheader from '../1components/videoheader';

const Services = () => {
  return (
    <div>
      <Videoheader
      link="https://ik.imagekit.io/kaavyarao05/TopNotch/Lights.mp4?updatedAt=1737297266035"
      heading="SERVICES"
      />
      <h2 className='subheading text-pink'>
        Events We Cater To
      </h2>
      <div className='grid grid-cols-2 pl-[15%] pr-[11%] pt-5'>
      <Card caption="Weddings" image={weddingPhoto} extracss={"hover:rotate-1"}></Card>
      <Card caption="Cocktail Parties" image={fire} extracss={"hover:-rotate-1"}></Card>
      <Card caption="Weddings" image={weddingPhoto} extracss={"hover:scale-[101%] col-span-2"}></Card>
      <Card caption="Weddings" image={weddingPhoto} extracss={"hover:rotate-1"}></Card>
      <Card caption="Weddings" image={weddingPhoto} extracss={"hover:-rotate-1"}></Card>
      </div>
      <h2 className='pt-20 pl-[11%] text-xl font-bold font-mono'>
      What We Offer
      </h2>
    </div>
  )
}

export default Services