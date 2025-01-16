import React from 'react'
import Image from 'next/image';
import Logo from '@/public/topNotch.png';

const footer = () => {
  return (
    <div className='mt-10 pb-5 footer'>
        <div className='grid sm:grid-cols-2'>
          <div className='py-7 pl-5 italic text-center row-span-2 mx-auto'>
              <Image src={Logo} width={80} alt='' className='mx-auto m-3'/>
              &quot;Crafting unforgettable experiences,<br/>one drink at a time.&quot;
          </div>
          <div className='sm:mt-10 sm:pl-0 pl-14'>
            <h3>Address</h3>
            <p>[Your Business Location]</p>
          </div>
          <div className='my-5 sm:mt-10 sm:pl-0 pl-14'>
            <h3>Working Hours</h3>
            <p>[Your Business Hours]</p>
          </div>
          
        </div>
        <div className='w-full bg-cyan text-center'>
            Connect with us
        </div>
    </div>
  )
}

export default footer