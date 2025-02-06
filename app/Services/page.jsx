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
      <h2 className='subheading text-pink'>
      What We Offer
      </h2>
      <ul>
        <li><span>Cocktail Counters:</span> Signature cocktails tailored to your taste.</li>
        <li><span>Mocktail Counters:</span> Non-alcoholic beverages that are just as exquisite.</li>
        <li><span>Customizable Menus:</span> Select from a wide range of drinks to suit your theme.</li>
        <li><span>Themed Bars:</span> Unique setups to match your event’s ambiance.</li>
      </ul>
    </div>
  )
}

export default Services