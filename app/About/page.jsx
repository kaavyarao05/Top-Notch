import React from 'react';
import banner from '@/public/blue-top-notch.png';

const About = () => {
  return (
    <div>
      <video autoPlay muted playsInline loop>
          <source src="https://ik.imagekit.io/kaavyarao05/TopNotch/topNotchBlue.mp4?updatedAt=1737224212933"/>
      </video>
      <header>
      <h1 className="-mt-[30%] vincendoFont font-extrabold text-4xl md:text-6xl duration-300 text-center">
        ABOUT
      </h1>
      <div className='mb-[30%]'/>
     </header>
     <h2 className='subheading text-pink'>
     The Story Behind Top Notch Cocktails and Mocktails
     </h2>
     <div className='pl-[15%] pr-[11%] pt-5 italic space-y-3 text-slate-200'>
     <p>
     At Top Notch Cocktails and Mocktails, we believe that every celebration deserves the perfect drink to match its spirit.&nbsp;
     <span className='block md:hidden'/>
     Based in Mangalore, we bring a blend of creativity, passion, and professionalism to elevate your special occasions.&nbsp;
     <span className='block md:hidden'/>
     From weddings to corporate events, sangeets, and rose ceremonies, our bespoke cocktail and mocktail counters promise to leave your guests delighted.
     </p>
     </div>
     <h2 className='subheading text-pink'>
     Why Choose Us?
     </h2>
     <div className='pl-[15%] pr-[11%] pt-5 italic space-y-3 text-slate-200'>
      <ul className='list-disc'>
            <li>Expert mixologists with years of experience</li>
            <li>Customized menus to suit your event theme</li>
            <li>Premium ingredients and exquisite presentation</li>
            <li>Exceptional service that ensures a seamless experience</li>
      </ul>
     </div>
     
    </div>
  )
}

export default About