import React from 'react'
import Image from 'next/image'
import quote from'@/public/quote.svg';

const testimonialCard = ({review, reviewer,className}) => {
  return (
    <div className={className+' bg-white rounded-md py-14 px-4 sm:p-14 text-black max-w-full mb-4 transition-all duration-500 md:mb-8'}>
        <Image src={quote} width={50} alt='quotation mark'
        className='absolute sm:-mx-10 -my-10'></Image>
        <p className='px-7 mt-4 text-[0.9rem] font-mono'>{review}</p>
        <p className='text-gray-400 mt-6 text-right pr-16 italic'>- {reviewer}</p>
        <Image src={quote} width={50} alt='quotation mark'
        className='absolute right-0 mr-14 sm:mr-24 lg:mr-[12rem] scale-[-100%]'></Image>
    </div>
  )
}

export default testimonialCard