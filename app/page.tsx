import bannersmall from '@/public/HomeBanner_copy.jpg';
import banner from '@/public/HomeBannersm.jpeg';

import Footer from "@/app/1components/footer";
import Image from 'next/image';

import windowsvg from '@/public/bannerwindowwhite.svg';
import ourStoryImg from '@/public/home/ourstory.jpg';
import ourServices from '@/public/home/ourservices.jpeg';


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
            <a className='homenavbutton headingnav' href='/Contact'>Book now</a>
            <a className='homenavbutton headingnav' href='/Services'>View Menu</a>
          </div>
        </div>
        <Image src={windowsvg} alt="" className='mask object-contain left-20 sm:left-40 mx-auto right-0 w-fit top-[250px] scale-[270%] scale-y-[300%] sm:scale-x-[400%] md:scale-x-[500%] lg:scale-x-[600%]'/>
        <Image src={banner} height={461} alt="" className='hidden sm:block absolute baseimg mx-auto left-20 sm:left-32 right-0 top-[97px]'/>
        <Image src={bannersmall} height={461} alt="" className='sm:hidden absolute baseimg mx-auto left-20 right-0 top-[97px]'/>
      </div>
      <div className='mt-[600px]'/>
      <div className='homeOurStory'>
        <Image
        src={ourStoryImg} alt="fruit platter with a sign saying 'bar' in the center"
        className='w-[50%] rounded-e-2xl inline-block'
        />
        <div className='w-fit self-center'>
          <h2 className='AboutH2'>Our Story</h2>
          <div className='AboutDiv sm:px-7'>
            <p>
            Founded by Kelvin Moras in 2022, Top Notch Cocktail started as a small idea with big ambitions.
            </p>
            <p className='hidden sm:block'>
            Through dedication and innovation, we’ve grown into a beloved brand among cocktail enthusiasts.
            Our commitment to quality and creativity has fueled our expansion and success.
            </p>
            <p className='hidden sm:block'>
              With every new creation, we continue to push the boundaries of mixology.
            </p>
            <p>
            Top Notch Cocktail—growing, evolving, and redefining the cocktail experience.
            </p>
            <a className='HomeAbout' href='/About'>Learn More</a>
          </div>
        </div>
      </div>
      <div >
        <Image src={ourServices} alt=''
        className='w-[70%] -my-5 absolute right-0 rounded-l-2xl -z-10'
        />
        <h2 className='ServicesH2'>Our Services</h2>
      </div>
      <Footer/>
    </div>
  );
}
