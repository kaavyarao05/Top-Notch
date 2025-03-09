'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';

import Videoheader from '../1components/videoheader';
import HGallery from '@/app/1components/HGallery';

import Counters1 from '@/public/themedCounters/1.jpeg';
import Counters2 from '@/public/themedCounters/2.jpeg';
import Counters3 from '@/public/themedCounters/3.jpeg';
import Counters4 from '@/public/themedCounters/4.jpeg';
import Counters5 from '@/public/themedCounters/5.jpeg';
import Counters6 from '@/public/themedCounters/6.jpeg';
import Counters7 from '@/public/themedCounters/7.jpeg';
import Counters8 from '@/public/themedCounters/8.jpeg';
import Counters9 from '@/public/themedCounters/9.jpeg';
import Counters10 from '@/public/themedCounters/10.jpeg';

import Flair1 from "@/public/flairs/fire.JPG";

const g = typeof globalThis === "object"
    ? globalThis
    : typeof window === "object"
        ? window
        : typeof global === "object"
            ? global
            : null;

const  themedCounters=[
  {
    src:Counters5,
    alt:""
  },
  {
    src:Counters2,
    alt:""
  },
  {
    src:Counters3,
    alt:""
  },
  {
    src:Counters4,
    alt:""
  },
  {
    src:Counters1,
    alt:""
  },
  {
    src:Counters6,
    alt:""
  },
  {
    src:Counters7,
    alt:""
  },
  {
    src:Counters8,
    alt:""
  },
  {
    src:Counters9,
    alt:""
  },
  {
    src:Counters10,
    alt:""
  }
]

const FlairsAndShooters=[
  {
    src:Flair1,
    alt:""
  }
]

function addEventListeners(){
  const carousels=document.getElementsByClassName("carousel");
  for(let i=0;i<carousels.length;i++){
    carousels[i].scroll({
      left: carousels[i].scrollWidth,
      top: 0,
      behavior: 'smooth',
    })
  }
}

function setCarouselImages(props){
  let k=1;
  return(
    props.map((prop)=>
      <Image key={k++} className="scoller" src={prop.src} alt={prop.alt}/>
    )    
  )
}

function handleNextClicked(carouselId,count){
  const carou=document.getElementById(carouselId);
  carou.scrollTo(carou.scrollWidth/count);
}

function Carousel(caption,props){
  return(
    <div id={caption} className='h-fit mb-20'>
          <h2 className='turisFont text-[2.0em] text-center'>{caption}</h2>
          <div className="carousel h-fit gap-3 inline-block">
            {setCarouselImages(props)}
          </div>
          <button onClick={()=>handleNextClicked(caption,2
          )} className='inline-block h-full'>next</button>
    </div>
  )
}



const Services = () => {
  React.useEffect(()=>{
    console.log(document.getElementsByClassName("carousel"))
  })
  return (
    <div>
      <Videoheader
      link="https://ik.imagekit.io/kaavyarao05/TopNotch/Lights.mp4?updatedAt=1737297266035"
      heading="OUR SERVICES"
      />
      <div>
        <HGallery caption="Themed Counters" arr={themedCounters}/>
        <HGallery caption="Flairs &amp; Shooters" arr={FlairsAndShooters}/>
        <HGallery caption="The Art of Liquid" arr={themedCounters}/>
        <HGallery caption="Our Bartenders" arr={themedCounters}/>
      </div>
    </div>
  )
}

export default Services