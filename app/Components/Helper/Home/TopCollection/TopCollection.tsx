import React from 'react'

const TopCollection = () => {
  return (
    <div className='pt-16 pb-12'>
      <h1 className='text-center font-bold text-3xl p-2 md:text-4xl text-blue-950'>
        Top Collection over {" "}
        <span className='text-amber-600'>Last 24 Hours</span>
      </h1>
    </div>
  )
}

export default TopCollection