import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='pt-12 pb-12'>
      <div className='w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-8 items-start border-b-[1.5px]
      border-b-slate-300'>
        {/* 1st Footer Part   */}
        <div>
          <div className='text-2xl text-red-700 font-semibold mb-4'>
            NFT Shop
          </div>
          <p className='text-gray-700 text-sm mt-2'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis provident aliquid odit.
          </p>
          <div className='mt-4 flex items-center space-x-4'>
            <FaFacebookF/>
            <FaTwitter/>
            <FaYoutube/>
            <FaInstagram/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer