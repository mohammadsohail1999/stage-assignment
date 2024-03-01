import Image from 'next/image'
import React from 'react'
import { useMediaQuery } from '../hooks/useMediaQuery';

const Card = ({imgPath}:{imgPath:string}) => {
    console.log(imgPath,"card");

//  const isMobile =  useMediaQuery("(max-width: 768px)");

  return (
    // <div>
    //  <img className='w-64 h-44' src={imgPath} alt='imagepath'/>
    // </div>
    <div
      className="flex lg:min-w-[250px] lg:min-h-[170px] min-w-[200px] min-h-[510px] lg:rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300 relative"
    >
      <Image
        src={imgPath}
        alt="poster"
        layout="fill"
        // objectFit="cover"
        className="lg:rounded-lg"
      />
    </div>

  )
}

export default Card