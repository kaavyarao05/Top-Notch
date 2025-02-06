import React from 'react'

const videoheader = ({link, heading}) => {
  return (
    <>
        <video autoPlay muted playsInline loop>
          <source src={link}/>
        </video>
        <header>
            <h1 className="-mt-[30%] vincendoFont font-extrabold text-4xl md:text-6xl duration-300 text-center">
                {heading}
            </h1>
        <div className='mb-[30%]'/>
        </header>
    </>
  )
}

export default videoheader