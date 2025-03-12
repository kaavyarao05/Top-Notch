"use client"

import React from "react";
import Footer from "@/app/1components/footer";
import Image from 'next/image';

import windowsvg from '@/public/bannerwindowwhite.svg';
import ourStoryImg from '@/public/home/ourstory.jpg';
import ourServices from '@/public/home/ourservices.jpeg';

import glass from '@/public/home/banner.jpeg';

import EndingCard from "@/app/1components/endingCard";

export default function Home() {
  return (
    <div>
      <div>
        <div className='absolute z-10 left-0 mx-auto right-32 sm:right-40 md:right-60 lg:right-72 w-fit top-[200px] duration-200'>
          <div className='text-8xl'>
            <h1 className='exmouthFont'>Top</h1>
            <h1 className='exmouthFont ml-5 -mt-6'>Notch</h1>
          </div>
          <div className='w-40'>
            <a className='homenavbutton headingnav' href='#footer'>Book now</a>
            <a className='homenavbutton headingnav' href='/Services'>View Menu</a>
          </div>
        </div>
        <div className='w-fit'>
          <Image src={windowsvg} alt="" className='mask left-20 right-0 mx-auto  top-[250px] scale-[270%]'/>
          <Image src={glass} height={415} alt="" className=' baseimg mx-auto left-[6rem] scale-x-105 right-0 top-[120px]'/>
        </div>
      </div>
      <div className='mt-[600px]'/>
      <div className='homeOurStory'>
        <Image
        src={ourStoryImg} alt="fruit platter with a sign saying 'bar' in the center"
        className='max-w-[50%] h-fit my-auto rounded-e-2xl inline-block'
        />
        <div className='w-fit self-center'>
          <h2 className='AboutH2'>Our Story</h2>
          <div className='AboutDiv sm:px-7'>
            <p>
            Founded by Kelvin Moras in 2022, Top Notch Cocktail started as a small idea with big ambitions.
            </p>
            <p>
            Through dedication and innovation, we’ve grown into a beloved brand among cocktail enthusiasts.
            Our commitment to quality and creativity has fueled our expansion and success.
            </p>
            <p>
              With every new creation, we continue to push the boundaries of mixology.
            </p>
            <p>
            Top Notch Cocktail—growing, evolving, and redefining the cocktail experience.
            </p>
            <a className='HomeAbout' href='/About'>Learn More</a>
          </div>
        </div>
      </div>
      <div className='flex my-10 '>
        <div className='w-[55%] self-center'>
          <h2 className='ServicesH2'>Our Services</h2>
          <div className='ServicesDiv'>
            <p>
            From stylish shots to Comprehensively outfitted bar setup , trained bartenders  we bring ultimate cocktail experience to you
            </p>
            <p>
            We provide cocktail catering for private parties, weddings, and corporate events.
            </p>
            <a className='HomeAbout' href='/Services'>Menu</a>
          </div>
        </div>
        <Image src={ourServices} alt='fruit platter'
        className='max-w-[45%] inline-block rounded-l-2xl -z-10'
        />
      </div>
      <div className="gap-4 grid">
      <EndingCard title="Hygiene" content="We uphold the highest hygiene standards by sanitizing all equipment, washing glassware at optimal temperatures, maintaining precise ingredient storage conditions, and adhering to strict cleanliness protocols."/>
      <EndingCard title="Party License Assistance" content="Setting up a bar for any event requires legal authorization. Top Notch will guide to ensure a seamless and compliant licensing process."/>
      </div>
      <Footer/>
    </div>
  );
}
