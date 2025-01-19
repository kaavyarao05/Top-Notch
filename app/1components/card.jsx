import React from 'react';
import Image from 'next/image';

const card = ({caption,image,extracss}) => {
  return (
    <div className={extracss+' card'} >
        <Image src={image} alt={caption}
        className='border-white border-4 rounded'></Image>
        <h1 className='italic cardcaption text-black text-center'>{caption}</h1>
    </div>
  )
}

export default card