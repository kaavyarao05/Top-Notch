import React from 'react'
import Image from 'next/image'
import topNotch from '@/public/topNotch.png'

const navbar = () => {
  return (
    <div className='fixed grid-cols-2 pl-8 py-2 min-w-full navbar z-50'>
      <div className='flex'>
        <a href='./'>
        <Image src={topNotch} width={64} alt='Top Notch logo' className='drop-shadow-md hover:drop-shadow-xl hover:rotate-6 duration-500'></Image>
      </a>
        <a className='navbutton' href='./'>Home</a>
        <a className='navbutton' href='./About'>About</a>
        <a className='navbutton' href='./Contact'>Contact</a>
        <a className='navbutton' href='./Gallery'>Gallery</a>
        <a className='navbutton' href='./Menu'>Menu</a>
        <a className='navbutton' href='./Services'>Services</a>
        <a className='navbutton' href='./Testimonials'>Testimonials</a>
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