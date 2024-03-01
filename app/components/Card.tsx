import Image from 'next/image'
import React from 'react'

const Card = ({imgPath}:{imgPath:string}) => {
  return (
    // <div>
    //  <img className='w-64 h-44' src={imgPath} alt='imagepath'/>
    // </div>
    <div
      className="flex min-w-[250px] min-h-[170px] md:min-w-[330px] md:min-h-[210px] rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300 relative"
    >
      <Image
        src={imgPath}
        alt="poster"
        layout="fill"
        // objectFit="cover"
        className="rounded-lg"
      />
    </div>

  )
}

export default Card