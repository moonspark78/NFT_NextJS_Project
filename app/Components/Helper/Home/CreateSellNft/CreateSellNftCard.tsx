import Image from 'next/image';
import React from 'react'


type Props= {
    image: string;
    title: string;
}

const CreateSellNftCard = ({image, title}:Props) => {
  return (
    <div>
        <Image src={image} alt={title} width={60} height={60} className='mx-auto'/>
        <h1 className='mt-8 mb-2 text-center text-lg text-blue-950 font-bold'>
            {title}
        </h1>
    </div>
  )
}

export default CreateSellNftCard