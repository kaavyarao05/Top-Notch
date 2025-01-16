import React from 'react'
import Image from 'next/image';
import Logo from '@/public/topNotch.png';

const footer = () => {
  return (
    <div className='mt-10 pb-5 footer'>
        <div>
          <div className='py-7 italic text-center'>
              <Image src={Logo} width={80} alt='' className='mx-auto m-3'/>
              &quot;Crafting unforgettable experiences,<br/>one drink at a time.&quot;
          </div>
          <div>
            <h3>Address</h3>
            <p>[Your Business Location]</p>
          </div>
          <div>
            <h3>Working Hours</h3>
            <p>[Your Business Hours]</p>
          </div>
          
        </div>
        <div className='mt-5 w-full bg-cyan text-center'>
            Connect with us
        </div>
    </div>
  )
}

export default footer