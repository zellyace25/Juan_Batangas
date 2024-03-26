import React from 'react'
import { governorBg } from '../../constant' 

const HeroGovernment = () => {
  return (
    <div className='flex pb-4 h-[580px] '> 
      <div className='flex flex-1 flex-col pt-[7rem] gap-16 '> 
        <div className='pl-8 bg-[#FFFFFF] w-[92%] rounded-r-[40px] p-4 border-title'>
          <h1 className='font-lexend text-[#830600] text-6xl py-4 font-medium'>Leading Batangas:</h1>
          </div> 
            <h1 className='text-6xl font-poppins pl-8 title-stroke font-bold'
            >A Closer Look at Government Officials</h1>
          </div>  
        <div className='flex-[1.18] relative'> 
          <img src={governorBg}  
            alt="governorBg"      
            className='gradient-border h-full rounded-bl-[71px] border-img'/>  
          <div className='absolute bg-white w-[20rem] text-xs rounded-[25px] p-2 bottom-10 ml-[4rem]'>
            <h5 className='text-[#1B1C57] font-lexend font-bold text-[21px] pl-4 pt-3'>Government Officials</h5>
            <p className='font-lexend text-sm text-[#68799F] pl-4 pb-3 pt-2'>Batangas</p> 
          </div>   
        </div> 
    </div>  
  )
}

export default HeroGovernment
