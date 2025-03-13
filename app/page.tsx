"use client"

import React from "react";
import Footer from "@/app/1components/footer";
import Image from 'next/image';

import windowsvg from '@/public/home/bannerwindowwhite.svg';
import ourStoryImg from '@/public/home/ourstory.jpg';
import ourServices from '@/public/home/ourservices.jpeg';

import glass from '@/public/home/banner.jpeg';

import EndingCard from "@/app/1components/endingCard";

import { FaVolumeMute as Mute} from "react-icons/fa";
import { AiFillMuted as Unmute } from "react-icons/ai";



export default function Home() {
  const [muted,setMuted]=React.useState(true);
  function toggleMute(){
    const ele:HTMLMediaElement=document.getElementById("vid") as HTMLMediaElement;
    ele.muted=!ele.muted;
    setMuted(ele.muted);
  }
  return (
    <div>
      <div>
        <div className='absolute sm:scale-[130%] md:scale-[200%] z-10 left-0 mx-auto right-0 w-fit top-[200px] sm:top-[260px] md:top-[240px]'>
          <div className='text-[7em]'>
            <h1 className='exmouthFont'>Top</h1>
            <h1 className='exmouthFont ml-[90px] -mt-[130px] -mb-[30px]'>Notch</h1>
          </div>
          <div className='w-40 md:w-32 md:scale-90'>
            <a className='homenavbutton headingnav' href='#footer'>Book now</a>
            <a className='homenavbutton headingnav' href='/Services'>View Menu</a>
          </div>
        </div>
        <div className='w-fit'>
          <Image src={windowsvg} height={435} alt="" className='mask left-10 right-0 mx-auto top-[120px] sm:scale-125 md:scale-x-[180%] sm:top-[175px] md:top-[170px]'/>
          <Image src={glass} height={435} alt="" className=' baseimg mx-auto left-[1rem] right-0 top-[120px] sm:scale-125 md:scale-[200%] sm:top-[175px] md:top-[170px]'/>
        </div>
      </div>
      <div className='mt-[600px] sm:mt-[750px] md:mt-[1100px]'/>
      <div className='homeOurStory'>
        <Image
        src={ourStoryImg} alt="fruit platter with a sign saying 'bar' in the center"
        className='max-w-[50%] h-fit my-auto rounded-2xl inline-block m-3'
        />
        <div className='w-fit self-center'>
          <h2 className='ServicesH2 tfy'>Our Story</h2>
          <div className='AboutDiv  md:text-[1.1em]'>
            <p>
            Founded by Kelvin Moras in 2022, Top Notch Cocktail started as a small idea with big ambitions.
            </p>
            <p className="extraText">
            Through dedication and innovation, we’ve grown into a beloved brand among cocktail enthusiasts.
            Our commitment to quality and creativity has fueled our expansion and success.
            </p>
            <p className="hidden md:block">
              With every new creation, we continue to push the boundaries of mixology.
            </p>
            <p>
            Top Notch Cocktail—growing, evolving, and redefining the cocktail experience.
            </p>
            <a className='HomeAbout' href='/About'>Learn More</a>
          </div>
        </div>
      </div>
      <div className='flex items-stretch my-10 '>
        <div className='self-center'>
          <h2 className='ServicesH2 tfy'>Our Services</h2>
          <div className='ServicesDiv md:text-[1.2em]'>
            <p>
            From stylish shots to Comprehensively outfitted bar setup , trained bartenders  we bring ultimate cocktail experience to you
            </p>
            <p>
            We provide cocktail catering for private parties, weddings, and corporate events.
            </p>
            <a className='HomeAbout sm:mt-[20%]' href='/Services'>Menu</a>
          </div>
        </div>
        <Image src={ourServices} alt='fruit platter'
        className='max-w-[35%] ml-auto h-fit my-auto inline-block rounded-l-2xl -z-10'
        />
      </div>
      <div className="gap-4 grid">
      <EndingCard title="Hygiene" content="We uphold the highest hygiene standards by sanitizing all equipment, washing glassware at optimal temperatures, maintaining precise ingredient storage conditions, and adhering to strict cleanliness protocols."/>
      <div className="h-fit">
        <button onClick={toggleMute} className="w-full justify-items-center mb-8">
          {muted?<Unmute className="scale-[200%]"/>:
          <Mute className="scale-[200%]"/>}
        </button>
        <video onClick={toggleMute} id="vid" autoPlay muted loop playsInline className="cursor-pointer w-[60%] sm:w-[25%] xl:w-[20%] mx-auto rounded-lg skew-x-1 border-2 border-red-600">
          <source src="https://ik.imagekit.io/kaavyarao05/TopNotch/homeVid.mp4?updatedAt=1741877035876"/>
        </video>
      </div>
      
      <EndingCard title="Party License Assistance" content="Setting up a bar for any event requires legal authorization. Top Notch will guide to ensure a seamless and compliant licensing process."/>
      </div>
      <Footer/>
    </div>
  );
}
