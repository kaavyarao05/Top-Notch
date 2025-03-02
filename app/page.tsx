import bannersmall from '@/public/HomeBanner_copy.jpg';
import banner from '@/public/HomeBannersm.jpeg';

import Footer from "@/app/1components/footer";
import Image from 'next/image';
import windowsvg from '@/public/bannerwindowwhite.svg';

export default function Home() {
  return (
    <div>
      <div>
        <div className='absolute z-10 left-0 mx-auto right-10 sm:right-40 md:right-72 lg:right-80 w-fit top-[250px] duration-200'>
          <div className='text-8xl'>
            <h1 className='tfy'>TOP</h1>
            <h1 className='tfy ml-8'>NOTCH</h1>
          </div>
          <div className='sm:w-40 w-32'>
            <a className='homenavbutton' href='/Contact'>Book now</a>
            <a className='homenavbutton' href='/Services'>View Menu</a>
          </div>
        </div>
        <Image src={windowsvg} alt="" className='mask object-contain left-20 sm:left-40 mx-auto right-0 w-fit top-[250px] scale-[270%] scale-y-[300%] sm:scale-x-[400%] md:scale-x-[500%] lg:scale-x-[600%]'/>
        <Image src={banner} height={461} alt="" className='hidden sm:block absolute baseimg mx-auto left-20 sm:left-32 right-0 top-[97px]'/>
        <Image src={bannersmall} height={461} alt="" className='sm:hidden absolute baseimg mx-auto left-20 right-0 top-[97px]'/>
      </div>
      <div className='mt-[600px]'>
        
      </div>
      <Footer/>
    </div>
  );
}
