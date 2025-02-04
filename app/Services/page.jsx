import React from 'react';
import Card from '@/app/1components/card.jsx';
import weddingPhoto from'@/public/wedding.JPG';
import fire from'@/public/fire.JPG';

const Services = () => {
  return (
    <div>
        <video autoPlay muted playsInline loop>
            <source src="https://ik.imagekit.io/kaavyarao05/TopNotch/Lights.mp4?updatedAt=1737297266035"/>
          </video>
        <header>
        <h1 className="-mt-[30%] vincendoFont font-extrabold text-4xl md:text-6xl duration-300 text-center">
          SERVICES
        </h1>
        <div className='mb-[30%]'/>
        </header>
        <h2 className='subheading text-pink'>
     Events We Cater To
     </h2>
     <div className='grid grid-cols-2 pl-[15%] pr-[11%] pt-5 text-slate-200'>
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