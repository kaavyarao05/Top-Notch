import React from 'react';
import banner from '@/public/blue-top-notch.png';

const About = () => {
  return (
    <div>
      <header
      style={{backgroundImage: `url(${banner.src})`}}>
      <div className="drop-shadow-md mx-5 py-40 sm:py-52 md:py-72 duration-500">
        <h1 className="text-5xl sm:text-5xl duration-300 text-center">About</h1>
      </div>
     </header>
     <h2 className='pt-20 pl-10 text-xl font-bold text-cyan font-mono'>
     The Story Behind Top Notch Cocktails and Mocktails
     </h2>
     <div className='pl-14 pt-5 italic space-y-3 text-slate-200'>
     <p>
     At Top Notch Cocktails and Mocktails, we believe that every celebration deserves the perfect drink to match its spirit.
     </p>
     <p>
      Based in Mangalore, we bring a blend of creativity, passion, and professionalism to elevate your special occasions.
     </p>
     <p>
     From weddings to corporate events, sangeets, and rose ceremonies, our bespoke cocktail and mocktail counters promise to leave your guests delighted.
     </p>
     </div>
    </div>
  )
}

export default About