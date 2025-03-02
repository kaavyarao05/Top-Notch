import React from 'react';
import Videoheader from '@/app/1components/videoheader';
import banner from '@/public/AboutUs.JPG';

//https://ik.imagekit.io/kaavyarao05/TopNotch/topNotchBlue.mp4?updatedAt=1737224212933
const About = () => {
  return (
    <div>
      <Videoheader
      photo={banner}
      alt="Banner"
      heading="ABOUT"
      />
     <h2 className='subheading text-pink'>
     The Story Behind Top Notch Cocktails and Mocktails
     </h2>
     <div className='default'>
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
     <div>
      <ul>
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