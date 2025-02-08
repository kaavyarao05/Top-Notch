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
    const dropicon=document.getElementById('dropicon')
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
    <div className='navbar'>
      <a href='./' className=''>
          <Image src={topNotch} width={60} alt='Top Notch logo' className='fixed left-4 hover:rotate-12 duration-500'></Image>
      </a>
      <div className='flex w-[800px] max-w-[800px] h-[64px] mx-auto'>
        <a id="Home" className='navbutton' href='./'>Home</a>
        <a id="About" className='navbutton' href='./About'>About</a>
        <a id="Contact" className='navbutton' href='./Contact'>Contact</a>
        <a id="Gallery" className='navbutton pl-4' href='./Gallery'>Gallery</a>
        <a id="Menu" className='navbutton' href='./Menu'>Menu</a>
        <a id="Services" className='navbutton px-2' href='./Services'>Services</a>
        <a id="Testimonials" className='navbutton px-4 pr-10' href='./Testimonials'>Testimonials</a>
        <a onClick={handleClick} className='menudropbutton'>
          <Image src={menuIcon} alt='menu icon' id="dropicon" width={30} className='invert duration-300'></Image>
        </a>
      </div>
      <div className='navdrop'>
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