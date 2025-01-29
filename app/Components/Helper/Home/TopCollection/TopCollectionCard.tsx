import React from 'react'


type Props ={
    data: {
        id: number;
        image: string;
        name: string;
        eth: number;
    }
    
}

const TopCollectionCard = ({data}: Props) => {
  return (
    <div>TopCollectionCard</div>
  )
}

export default TopCollectionCard