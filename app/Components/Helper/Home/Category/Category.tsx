'use client';

import React from 'react'
import Carousel from 'react-multi-carousel';
import HotBidCard from '../HotBids/HotBidCard';
import { HotBidData } from '@/data/Data';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Category = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass='item'>
        {HotBidData.map((data) =>{
          return <div key={data.id}>
            <HotBidCard data={data}/>
          </div>
        })}
    </Carousel>
  )
}

export default Category