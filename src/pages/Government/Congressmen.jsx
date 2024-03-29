import React from 'react'
import { useState } from 'react';
import { congressData, leftArrow, rightArrow } from '../../constant'
import CarouselCard from '../../components/Government/CarouselCard';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css'

const Congressmen = () => {
    
  const [startIndex, setStartIndex] = useState(0);
  const swiper = useSwiper();

  const prevBtn = () => {
    setStartIndex((prevStartIndex) => Math.max(0, prevStartIndex - 1));
  };
  
  const nextBtn = () => {
    if (startIndex === congressData.length - 4) {
      setStartIndex(0); 
    } else {
      setStartIndex((prevStartIndex) => prevStartIndex + 1);
    }
  }; 

  return ( 
    <div className='py-8 bg-primary'>  
      <div className='flex'> 
        <div className='border border-[#B00A0A] h-full w-[8rem] mt-3 mr-3'></div>
        <div> 
          <h4 className='font-lexend text-[#830600] text-5xl mb-3'>Congresssmen/Congresswomen</h4>
          <h4 className='font-lexend text-[#1B1C57] text-6xl font-bold'>All Districts</h4>
        </div>
      </div>
      <div className=''>
        <div className='flex justify-end items-center pr-4 gap-4 mb-8'> 
          <img src={leftArrow} alt=""   
            className={`bg-[#E0E3EB] rounded-[34px] p-3`} 
            onClick={prevBtn}     
          /> 
           <img src={rightArrow} alt="" 
            className={`bg-[#E0E3EB] rounded-[34px] p-3`} 
            onClick={nextBtn}   
          />  
        </div>        
      
        <Swiper
            slidesPerView={4.3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {congressData.slice(startIndex).map((congress, index) => (
              <SwiperSlide key={index}> 
                <div className='relative ml-8'>  
                  <CarouselCard {...congress}/>
                </div> 
              </SwiperSlide> 
            ))}
        </Swiper> 
      </div>
    </div>
  );
  
  
}

export default Congressmen
