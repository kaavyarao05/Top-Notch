import React from 'react'
import Image from 'next/image'
import quote from'@/public/quote.svg';

const testimonialCard = ({review, reviewer,className}) => {
  return (
    <div className={className+' bg-white rounded-md p-14 text-black max-w-full mb-4 transition-all duration-500 md:mb-8'}>
        <Image src={quote} width={50} alt='quotation mark'
        className='absolute -m-10'></Image>
        <p className='pl-5'>{review}</p>
        <p className='text-gray-400 mt-6 text-center italic'>- {reviewer}</p>
        <Image src={quote} width={50} alt='quotation mark'
        className='absolute right-0 mr-24 scale-[-100%]'></Image>
    </div>
  )
}

export default testimonialCard