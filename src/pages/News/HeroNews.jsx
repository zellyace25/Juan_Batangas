import React from 'react'
import { heroNewsImg, waveBottom, waveBottom2, waveTop, waveTop2 } from '../../constant'

const HeroNews = () => {
  return (
    <div className='heroNews relative z-10 p-[5rem] pb-0'>
        <div className='flex  gap-4'>
            <div className='flex-1'>
                <div className='flex flex-col gap-[3rem] mb-12'>
                    <div>
                        <h5 className='font-poppins text-white font-bold text-[25px] mb-8'>
                            Stay connected with</h5>
                        <h1 className='font-poppins text-[#FFCD1A] text-7xl font-bold leading-[90px] mb-8'>
                            News and Announcements in Batangas Province</h1>
                        <p className='font-poppins text-white text-[17px] leading-[40px]'>
                            Know about what's happening in our community, 
                            and join us in celebrating the achievements, progress, and resilience of Batangueños</p>
                    </div>
                    <div className='z-10'>   
                        <button className='bg-[#B00A0A] text-white py-4 px-8 rounded-[60px] font-poppins text-[20px]'>
                        Get more details</button>
                    </div> 
                </div> 
            </div>
            <div className=''>
                <img src={heroNewsImg} alt=""
                className='object-cover h-[600px]' />     
            </div>  
        </div>  
        <div className='bg-behind'></div>
        <div className='vector-bottom absolute bottom-0 left-0 z-[-1]'>
            <img src={waveBottom} alt="" />
        </div>
        <div className='absolute bottom-0 left-0 z-[-1]'>
            <img src={waveBottom2} alt="" />
        </div>
        <div className='absolute top-0 left-0 z-[-1]'>
            <img src={waveTop} alt="" />
        </div>
        <div className='absolute top-0 left-0 z-[-1]'>
            <img src={waveTop2} alt="" />
        </div>
    </div>
  )
}

export default HeroNews
