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

import Flair1 from "@/public/flairs/flairs1.JPG";
import Flair2 from "@/public/flairs/flairs2.jpeg";
import Flair3 from "@/public/flairs/flairs3.jpeg";
import Flair4 from "@/public/flairs/flairs4.jpeg";
import Flair5 from "@/public/flairs/flairs5.jpeg";
import Flair6 from "@/public/flairs/flairs6.jpeg";

import aol1 from '@/public/artOfLiquid/aol1.jpeg';
import aol2 from '@/public/artOfLiquid/aol2.jpeg';
import aol3 from '@/public/artOfLiquid/aol3.jpeg';
import aol4 from '@/public/artOfLiquid/aol4.jpeg';
import aol5 from '@/public/artOfLiquid/aol5.jpeg';
import aol6 from '@/public/artOfLiquid/aol6.jpeg';
import aol7 from '@/public/artOfLiquid/aol7.jpeg';
import aol8 from '@/public/artOfLiquid/aol8.jpeg';

import emp1 from '@/public/employees/emp1.jpeg';
import emp2 from '@/public/employees/emp2copy.jpeg';
import emp3 from '@/public/employees/emp3.jpeg';
import emp4 from '@/public/employees/emp4.jpeg';
import emp5 from  '@/public/employees/emp.jpeg';


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
  },
  {
    src:Flair2,
    alt:""
  },
  {
    src:Flair3,
    alt:""
  },
  {
    src:Flair4,
    alt:""
  },
  {
    src:Flair5,
    alt:""
  },
  {
    src:Flair6,
    alt:""
  }
]

const artOfLiquid=[
  {
    src:aol1,
    alt:""
  },
  {
    src:aol2,
    alt:""
  },
  {
    src:aol3,
    alt:""
  },
  {
    src:aol4,
    alt:""
  },
  {
    src:aol5,
    alt:""
  },
  {
    src:aol6,
    alt:""
  },
  {
    src:aol7,
    alt:""
  },
  {
    src:aol8,
    alt:""
  }
]

const bartenders=[
  {
    src:emp1,
    alt:""
  },
  {
    src:emp2,
    alt:""
  },
  {
    src:emp4,
    alt:""
  },
  {
    src:emp5,
    alt:""
  },
  {
    src:emp3,
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
        <HGallery caption="Themed Counters" arr={themedCounters} heightClass={"h-[200px] md:h-[270px] xl:h-[378px]"}/>
        <HGallery caption="Flairs &amp; Shooters" arr={FlairsAndShooters} heightClass={"h-[515px] md:h-[695px] xl:h-[974px]"}/>
        <HGallery caption="The Art of Liquid" arr={artOfLiquid} heightClass={"h-[515px] md:h-[695px] xl:h-[974px]"}/> 
        <HGallery caption="Exclusive Team" arr={bartenders} heightClass={"h-[200px] md:h-[270px] xl:h-[378px]"}/>
      </div>
    </div>
  )
}

export default Services