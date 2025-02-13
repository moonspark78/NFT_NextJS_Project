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
            <FaFacebookF className='w-6 h-6 text-blue-700 cursor-pointer'/>
            <FaTwitter className='w-6 h-6 text-sky-500 cursor-pointer'/>
            <FaYoutube className='w-6 h-6 text-rose-700 cursor-pointer'/>
            <FaInstagram className='w-6 h-6 text-pink-700 cursor-pointer'/>
          </div>
        </div>
        {/* 2nd Footer Part */}
        <div className='md:mx-auto mx-0'>
          <h1 className="footer__title">MarketPlace</h1>
          <p className="footer__link">All NFTs</p>
          <p className="footer__link">Art</p>
          <p className="footer__link">Music</p>
          <p className="footer__link"> Collectibles</p>
          <p className="footer__link">Wallets</p>
        </div>
        {/* 3rd Footer Part */}
        <div className='lg:mx-auto mx-0'>
          <h1 className="footer__title">Company</h1>
          <p className="footer__link">Quickstart Guide</p>
          <p className="footer__link">Migration Guide</p>
          <p className="footer__link">API Reference</p>
          <p className="footer__link">View All Docs</p>
          <p className="footer__link">System Status</p>
        </div>
        {/* 4th Footer Part */}
        <div className='lg:mx-auto mx-0'>
           <h1 className="footer__title">Legal</h1>
           <p className="footer__link">Privacy Policy</p>
           <p className="footer__link">Terms and Conditions</p>
           <p className="footer__link">GDPR</p>
           <p className="footer__link">Fair Billing Policy</p>
        </div>
      </div>
      <div className='text-center mt-4 text-sm text-black opacity-75'>Moonspark</div>
    </div>
  )
}

export default Footer