"use client"
import React from 'react';
import Image from 'next/image';
import topNotch from '@/public/topNotch.png';
import menuIcon from '@/public/menu.svg';
import { usePathname } from "next/navigation";

function handleClick(){
  console.log("Cllick");
  var elements=document.getElementsByClassName("dropbutton");
  for(var i=0;i<elements.length;i++){
    elements[i].classList.toggle("activedropbutton");
  }
}

const navbar = () => {
  return (
    <div className='fixed grid-cols-2 pl-8 py-2 min-w-full navbar z-50'>
      <div className='flex'>
        <a href='./'>
        <Image src={topNotch} width={64} alt='Top Notch logo' className='drop-shadow-md hover:drop-shadow-xl hover:rotate-6 duration-500'></Image>
      </a>
        <a id="Home" className='navbutton' href='./'>Home</a>
        <a id="About" className='navbutton' href='./About'>About</a>
        <a id="Contact" className='navbutton' href='./Contact'>Contact</a>
        <a id="Gallery" className='navbutton' href='./Gallery'>Gallery</a>
        <a id="Menu" className='navbutton' href='./Menu'>Menu</a>
        <a id="Services" className='navbutton' href='./Services'>Services</a>
        <a id="Testimonials" className='navbutton' href='./Testimonials'>Testimonials</a>
        <a onClick={handleClick} className='menudropbutton'>
          <Image src={menuIcon} alt='menu icon' width={30} className='invert hover:scale-x-150 duration-300'></Image>
        </a>
      </div>
      <div className='navdrop shadow-sm'>
        <a className='dropbutton' href='./'>Home</a>
        <a className='dropbutton' href='./About'>About</a>
        <a className='dropbutton' href='./Contact'>Contact</a>
        <a className='dropbutton' href='./Gallery'>Gallery</a>
        <a className='dropbutton' href='./Menu'>Menu</a>
        <a className='dropbutton' href='./Services'>Services</a>
        <a className='dropbutton' href='./Testimonials'>Testimonials</a>
      </div>
    </div>
  )
}

export default navbar