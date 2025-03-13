import React from 'react';
import Videoheader from '@/app/1components/videoheader';
import banner from '@/public/HomeBanner.jpeg';
import lightbg from "@/public/about/aboutbg.jpeg";
import Image from 'next/image';

//https://ik.imagekit.io/kaavyarao05/TopNotch/topNotchBlue.mp4?updatedAt=1737224212933
const About = () => {
  return (
    <div>
      <Videoheader
      photo={banner}
      alt="Banner"
      heading="ABOUT"
      />
      <div className='my-5 px-10'>
        <h2 className='text-red-500 tfy text-[1.5em] italic'>
        The Story Behind Top Notch
        </h2>
        <div>
          <div className='turisFont grid gap-5 italic p-7 '>
            <p>
              Founded by Kelvin Moras in 2022, Top Notch Cocktail started as a small idea with big ambitions. Through dedication and innovation, we have grown into a beloved brand among cocktail enthusiasts.
            </p>
            <p>
            Our passion for mixology, commitment to quality, and creativity have fueled our rapid expansion. From classic recipes to bold new creations, we push the boundaries of flavor, ensuring every sip is an experience. 
            </p>
            <p>
            Whether it’s an intimate gathering or a grand celebration, our cocktails set the perfect mood. Top Notch Cocktail is more than just a drink—it’s a lifestyle, a celebration, and a masterpiece in every glass.
            </p>
          </div>
        <Image src={lightbg} alt="glasses on a table"
        className='w-full my-10 rounded-lg'
        />
        </div>
        <h2 className='text-red-500 tfy text-[1.5em] italic'>
        Why Choose Us?
        </h2>
        <div className='turisFont grid gap-5 italic p-7'>
          <ol className='list-disc'>
                <li>
                Expert Craftsmanship – Our mixologists are highly skilled, blending innovation with tradition to create unforgettable cocktails.
                </li>
                <li>
                Premium Ingredients – We use only the finest spirits, freshest fruits, and highest-quality ingredients for a superior taste.
                </li>
                <li>
                Tailored Experiences – Every event is unique, and we customize our services to match your theme, style, and preferences.
                </li>
                <li>
                Flair & Entertainment – From flair bartending to immersive theme bars, we bring energy and excitement to every occasion.
                </li>
                <li>
                Commitment to Excellence – We prioritize quality, presentation, and customer satisfaction in every cocktail we serve.
                </li>
                <li>
                A Growing Legacy – With a strong reputation and continuous innovation, we are redefining the cocktail experience one drink at a time
                </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default About