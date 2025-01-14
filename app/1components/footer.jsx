import React from 'react'
import Image from 'next/image';
import Logo from '@/public/topNotch.png';

const footer = () => {
  return (
    <div className='mt-10'>
        <div>
            <Image src={Logo} alt='' width={170} 
            className='mx-auto'></Image>
        </div>
        
    </div>
  )
}

export default footer