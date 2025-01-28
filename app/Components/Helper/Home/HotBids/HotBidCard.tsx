"use client";
import Image from 'next/image';
import React from 'react'
import Tilt from 'react-parallax-tilt';


type Props={
  data: {
    id: number;
    image: string;
    name: string;
    eth: number;
    currentBid: number;
    love: number;
}
}

const HotBidCard = ({data}:Props) => {
  return (
    <Tilt>
      <div className='rounded-lg border-2 cursor-pointer border-gray-300 border-opacity-30 p-6'>
        <div className='w-full h-[180px]'>
          <Image
            alt={data.name}
            src={data.image}
            width={300}
            height={260 }
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </Tilt>
  )
}

export default HotBidCard