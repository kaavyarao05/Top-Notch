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
  var dropicon=document.getElementById('dropicon');
  var navdrop=document.getElementById('navdrop');
  for(var i=0;i<elements.length;i++){
    elements[i].classList.toggle("activedropbutton");
  }
  dropicon.classList.toggle('scale-x-150');
  navdrop.classList.toggle('hidden');
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
        <a id="Contact" className='navbutton' href='/#footer'>Contact</a>
        <a id="Services" className='navbutton px-2' href='./Services'>Services</a>
        <button onClick={handleClick} className='menudropbutton'>
          <Image src={menuIcon} alt='menu icon' id="dropicon" width={30} className='invert duration-300'></Image>
        </button>
      </div>
      <div className='navdrop hidden' id="navdrop">
        <a className='dropbutton' href='./'>Home</a>
        <a className='dropbutton' href='./About'>About</a>
        <a className='dropbutton' href='/#footer'>Contact</a>
        <a className='dropbutton' href='./Services'>Services</a>
      </div>
    </div>
  )
}

export default navbar