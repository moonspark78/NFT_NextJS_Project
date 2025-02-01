import React from 'react'
import Hero from './Hero/Hero'
import HotBids from './HotBids/HotBids'
import TopCollection from './TopCollection/TopCollection'
import Category from './Category/Category'
import CreateSellNft from './CreateSellNft/CreateSellNft'

const Home = () => {
  return (
    <div className='pt-20'>
      <Hero/>
      <HotBids/>
      <TopCollection/>
      <Category/>
      <CreateSellNft/>
    </div>
  )
}

export default Home