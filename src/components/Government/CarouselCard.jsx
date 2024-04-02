import React from 'react'
import BadgeTitle from './BadgeTitle'

const CarouselCard = ({name, img, district}) => {
  return (
    <div className='flex justify-center flex-col'>
      <div className='relative'> 
        <img src={img} alt=""  
        className='rounded-3xl border-congress mb-4 h-[50]'/> 
       <BadgeTitle district={district}/>
      </div> 
        <p className='uppercase font-lexend text-2xl text-[#0E1735] text-center'>{name}</p>
    </div> 
  )
}

export default CarouselCard
