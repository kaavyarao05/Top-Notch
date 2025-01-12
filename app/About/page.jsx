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
    </div>
  )
}

export default About