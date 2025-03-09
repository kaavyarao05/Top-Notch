import React from 'react'
import Image from 'next/image'

const videoheader = ({link, heading, photo,alt}) => {
  return (
    <>
        {link?<video autoPlay muted playsInline loop>
          <source src={link}/>
        </video>:<Image src={photo} alt={alt}></Image>}
        <header>
            <h1 className="-mt-[30%] font-extrabold text-[2em] md:text-6xl duration-300 text-center">
                {heading}
            </h1>
        <div className='mb-[30%]'/>
        </header>
    </>
  )
}

export default videoheader