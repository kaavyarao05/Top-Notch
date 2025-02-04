import React from 'react';
import Image from 'next/image';

const card = ({caption,image,extracss}) => {
  return (
    <div className={extracss+' card'} >
        <Image src={image} alt={caption}
        className='border-white border-4 rounded'></Image>
        <p>{caption}</p>
    </div>
  )
}

export default card