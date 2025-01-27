import React from 'react'

const Hero = () => {
  return (
    <div className='h-[calc(100vh-13vh)] w-full flex justify-center flex-col'>
        <div className='w-4/5 mx-auto items-center grid grid-cols-1 lg:grid-cols-5 gap-8'>
            {/* Text Content */}
            <div className='col-span-2'>
              <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-7xl text-blue-950 font-bold'>
                Buy, Sell and Collect NFTs
              </h1>
              <p className='text-md md:text-[17px] text-gray-700 text-opacity-80 mt-4 font-medium'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className='flex items-center space-x-2 mt-10'>
                <button className='w-36 rounded-full py-3 px-8 text-center font-semibold text-white bg-blue-900 transition-all hover:bg-blue-950'>
                  Upload</button>
                <button className='w-36 rounded-full py-3 px-8 text-center font-semibold text-white bg-rose-900 transition-all hover:bg-rose-950'>
                  Explor</button>
              </div>
            </div>
            {/* Image Content */}
            <div></div>
        </div>
    </div>
  )
}

export default Hero