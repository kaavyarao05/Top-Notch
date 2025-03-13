import React from 'react'
import Image from 'next/image';
import Logo from '@/public/navbar/topNotch.png';

const footer = () => {
  return (
    <div className='mt-10 pb-5 footer turisFont bg-black w-full'>
        <div id="footer" className='grid sm:grid-cols-2 items-center'>
          <div className='py-7 px-5 italic text-center row-span-2 mx-auto text-[1.4rem]'>
              <Image src={Logo} width={80} alt='' className='mx-auto m-3 mb-7'/>
              &quot;Crafting unforgettable experiences,<br/>one drink at a time.&quot;
          </div>
          <div className=''>
            <div className='sm:mt-10 sm:pl-0 pl-14'>
            <h3 className='tfy'>Address</h3>
            <p>[Your Business Location]</p>
            </div>
            <div className='my-5 sm:mt-10 sm:pl-0 pl-14'>
            <h3>Working Hours</h3>
            <p>[Your Business Hours]</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default footer