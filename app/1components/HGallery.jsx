import React from 'react'
import Image from 'next/image';
import { GoChevronRight, GoChevronLeft } from "react-icons/go";


const Gallery=({caption,arr,heightClass})=>{
    const [imgIndex,setImgIndex]=React.useState(0);
    function next(){
      if(imgIndex<arr.length-1)
        setImgIndex(imgIndex+1);
      else
        setImgIndex(0);
    }
    function prev(){
      if(imgIndex>0)
        setImgIndex(imgIndex-1);
      else
        setImgIndex(arr.length-1);
    }
    return(
      <div id={caption} className='h-fit mb-20 mx-10'>
            <h2 className='tfy text-[2.0em] text-center italic'>{caption}</h2>
            <div className="hgallerycontainer">
              <button onClick={prev} className='scale-[200%] -mr-2 bg-black py-2 h-fit my-auto rounded-lg duration-300'><GoChevronLeft/></button>
                <Image onClick={next} src={arr[imgIndex].src} alt={arr[imgIndex].alt} className={'duration-500 rounded-xl inline-block w-[370px] md:w-[500px] xl:w-[700px] mx-auto '+heightClass}/>
              <button onClick={next} className='scale-[200%] -ml-2 bg-black py-2 h-fit my-auto rounded-lg duration-300'><GoChevronRight/></button>
            </div>
      </div>
    )
}

export default Gallery;
