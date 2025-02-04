import React from 'react'

const Gallery = () => {
  return (
    <div>
      <video autoPlay muted playsInline loop>
          <source src="https://ik.imagekit.io/kaavyarao05/TopNotch/topNotchBlue.mp4?updatedAt=1737224212933"/>
      </video>
      <header>
      <h1 className="-mt-[30%] vincendoFont font-extrabold text-4xl md:text-6xl duration-300 text-center">
        GALLERY
      </h1>
      <div className='mb-[30%]'/>
      </header>    
    </div>
  )
}

export default Gallery