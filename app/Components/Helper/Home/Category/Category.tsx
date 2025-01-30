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
    <div className='pt-16 pb-12'>
      <h1 className='text-center font-bold text-3xl p-2 md:text-4xl text-blue-950'>
        Trending Categories
      </h1>
    </div>
  )
}

export default Category