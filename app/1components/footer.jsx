import React from 'react'
import Image from 'next/image';
import Logo from '@/public/navbar/topNotch.png';
import { FaInstagram,FaFacebookSquare,FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const footer = () => {
  return (
    <div className='mt-10 pb-5 footer turisFont bg-black w-full'>
        <div id="footer" className='py-7 px-5 max-w-full grid sm:grid-cols-2 sm:px-[8%] items-center p-6'>
          <div className='italic mx-auto turisFont text-center text-[1.2rem]'>
              <Image src={Logo} width={80} alt='' className='mx-auto m-3 '/>
              &quot;Crafting unforgettable experiences,<br/>one drink at a time.&quot;
          </div>
          <div className='grid pl-16 mx-auto italic'>
            <a className='pt-6' href="https://www.google.com/maps/place/12%C2%B052'51.9%22N+74%C2%B051'56.1%22E/@12.8810916,74.8630021,17z/data=!3m1!4b1!4m4!3m3!8m2!3d12.8810916!4d74.865577?entry=ttu&g_ep=EgoyMDI1MDMxMC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D">
              <FaLocationDot fill="hotpink" className='inline-block text-pink'/> 
              &nbsp;Near Nantoor Sandeesha
            </a>
            <a href='https://www.instagram.com/top_notch.cocktails'>
              <FaInstagram fill="hotpink" className='inline-block text-pink'/> 
              &nbsp;Top_notch.cocktails
            </a>
            <a href='https://www.facebook.com/share/1E3UL2a52C/'>
              <FaFacebookSquare fill="hotpink" className='inline-block text-pink'/> 
              &nbsp;TOP NOTCH Cocktails
            </a>
            <a href='tel:+91 6362 009 871' className='pt-6'>
              <FaPhone fill="hotpink" className='inline-block text-pink'/> 
              &nbsp;+91 6362 009 871
            </a>   
            <a href='tel:+91 74833 40941 '>
              <FaPhone fill="hotpink" className='inline-block text-pink'/> 
              &nbsp;+91 74833 40941 
            </a>        
          </div>
        </div>
    </div>
  )
}

export default footer