import Footer from "@/app/1components/footer";
import Image from 'next/image';

import windowsvg from '@/public/bannerwindowwhite.svg';
import ourStoryImg from '@/public/home/ourstory.jpg';
import ourServices from '@/public/home/ourservices.jpeg';

import glass from '@/public/home/banner.jpeg';

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
      <div className='flex my-10 '>
        <div className='w-[55%] self-center'>
          <h2 className='ServicesH2'>Our Services</h2>
          <div className='ServicesDiv'>
            <p>
            From stylish shots to fashionable theme bars, we bring the ultimate cocktail experience to you.
            </p>
            <p>
            We provide cocktail catering for private parties, weddings, and corporate events.
            </p>
            <a className='HomeAbout' href='/Services'>Menu</a>
          </div>
        </div>
        <Image src={ourServices} alt='fruit platter'
        className='max-w-[45%] w-fit inline-block rounded-l-2xl -z-10'
        />
      </div>
      <Footer/>
    </div>
  );
}
