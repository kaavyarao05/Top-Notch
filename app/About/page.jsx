import React from 'react';
import banner from '@/public/blue-top-notch.png';

const About = () => {
  return (
    <div>
      <header
      style={{backgroundImage: `url(${banner.src})`}}>
      <div className="drop-shadow-lg mx-5 py-36 sm:py-40 md:py-56 duration-500">
      <h1 className="font-extrabold text-4xl md:text-6xl duration-300 text-center">
        ABOUT
      </h1>
      </div>
     </header>
     <h2 className='pt-20 pl-[11%] text-xl font-bold text-cyan font-mono'>
     The Story Behind Top Notch Cocktails and Mocktails
     </h2>
     <div className='pl-[15%] pr-[11%] pt-5 italic space-y-3 text-slate-200'>
     <p>
     At Top Notch Cocktails and Mocktails, we believe that every celebration deserves the perfect drink to match its spirit.&nbsp;
     <span className='block md:hidden'/>
     Based in Mangalore, we bring a blend of creativity, passion, and professionalism to elevate your special occasions.
     <span className='block md:hidden'/>
     From weddings to corporate events, sangeets, and rose ceremonies, our bespoke cocktail and mocktail counters promise to leave your guests delighted.
     </p>
     </div>
    </div>
  )
}

export default About