"use client"
import React from 'react';
import Image from 'next/image';
import topNotch from '@/public/topNotch.png';
import menuIcon from '@/public/menu.svg';
import { usePathname } from "next/navigation";

const g = typeof globalThis === "object"
    ? globalThis
    : typeof window === "object"
        ? window
        : typeof global === "object"
            ? global
            : null;


function addEventListeners(){
  g.window.addEventListener('click',(e)=>{
    var dropicon=document.getElementById('dropicon')
    if (!dropicon.contains(e.target)){  
      if(dropicon.classList.contains("scale-x-150")){
        // menu is expanded
        handleClick();
      }
    }
  })
}

function handleClick(){
  var elements=document.getElementsByClassName("dropbutton");
  var dropicon=document.getElementById('dropicon')
  for(var i=0;i<elements.length;i++){
    elements[i].classList.toggle("activedropbutton");
  }
  dropicon.classList.toggle('scale-x-150')
}

function setCurrentPage(pathname){
  console.log(pathname);
}

const navbar = () => {
  React.useEffect(()=>{
    addEventListeners();
    setCurrentPage()
  })
  return (
    <div className='fixed flex pl-8 py-2 min-w-full navbar z-50 shadow-[rgba(250,250,250,0.1)] hover:shadow-[rgba(250,250,250,0.21)] shadow-lg duration-300 hover:shadow-xl'>
      <div className='flex items-end'>
        <a href='./'>
        <Image src={topNotch} width={60} alt='Top Notch logo' className='my-2 drop-shadow-md hover:drop-shadow-xl hover:rotate-12 duration-500'></Image>
      </a>
        <a id="Home" className='navbutton' href='./'>Home</a>
        <a id="About" className='navbutton' href='./About'>About</a>
        <a id="Contact" className='navbutton' href='./Contact'>Contact</a>
        <a id="Gallery" className='navbutton' href='./Gallery'>Gallery</a>
        <a id="Menu" className='navbutton' href='./Menu'>Menu</a>
        <a id="Services" className='navbutton' href='./Services'>Services</a>
        <a id="Testimonials" className='navbutton' href='./Testimonials'>Testimonials</a>
        <a onClick={handleClick} className='menudropbutton'>
          <Image src={menuIcon} alt='menu icon' id="dropicon" width={30} className='invert duration-300'></Image>
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