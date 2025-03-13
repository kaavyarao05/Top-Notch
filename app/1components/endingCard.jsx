"use client"
import React from 'react';
import Image from 'next/image';

const endingCard=({title,content})=>{
    return(
      <div id="card" className="skew-x-3 relative text-center rounded-lg w-fit px-10 m-auto mx-4 py-14">
        <h3 className="text-red-600 tfy text-[2em]">
          {title}
        </h3>
        <p className="text-white turisFont text-pretty">
          {content}
        </p>
      </div>
    )
}
export default endingCard
