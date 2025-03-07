import React from 'react';
import Image from 'next/image';

import Videoheader from '../1components/videoheader';

import Shooter1 from '@/public/themedCounters/1.jpeg';
import Shooter2 from '@/public/themedCounters/2.jpeg';
import Shooter3 from '@/public/themedCounters/3.jpeg';
import Shooter4 from '@/public/themedCounters/4.jpeg';
import Shooter5 from '@/public/themedCounters/5.jpeg';
import Shooter6 from '@/public/themedCounters/6.jpeg';
import Shooter7 from '@/public/themedCounters/7.jpeg';
import Shooter8 from '@/public/themedCounters/8.jpeg';
import Shooter9 from '@/public/themedCounters/9.jpeg';
import Shooter10 from '@/public/themedCounters/10.jpeg';

const Services = () => {
  return (
    <div>
      <Videoheader
      link="https://ik.imagekit.io/kaavyarao05/TopNotch/Lights.mp4?updatedAt=1737297266035"
      heading="OUR SERVICES"
      />
      <div>
        <div>
          <h2 className='chicagoFont text-[2.8em] text-center'>Themed Counters</h2>
          <div className="carousel mx-20 h-[200px] sm:h-[300px] m-3">
            <Image src={Shooter1} alt=""/>
            <Image src={Shooter2} alt=""/>
            <Image src={Shooter3} alt=""/>
            <Image src={Shooter4} alt=""/>
            <Image src={Shooter5} alt=""/>
            <Image src={Shooter6} alt=""/>
            <Image src={Shooter7} alt=""/>
            <Image src={Shooter8} alt=""/>
            <Image src={Shooter9} alt=""/>
            <Image src={Shooter10} alt=""/>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Services