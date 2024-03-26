import React from 'react'
import { governorData } from '../../constant'

const AboutGovernor = () => { 
  return (
    <div className='mb-8'>
      {governorData.map((data) =>{ 
        return <div className='relative flex h-[32rem] items-center' key={data.governor.name}> 
        <img src={data.governor.img} alt=""
        className='rounded-[42px] w-[350px] border-2 object-cover border-[#B00A0A] z-10 ml-20 
        h-[100%] absolute'/>    
        <div className='flex flex-col text-white bg-[#B00A0A] w-full h-[20rem] items-start pl-[30em] py-4'>  
          <h2 className='uppercase font-lexend font-semibold text-[4rem] text-[#FDC221] mb-10'>{data.governor.position}</h2>  
          <h5 className='text-[#FFFFFF] font-poppins text-[40px]'>{data.governor.name}</h5> 
          <p className='text-[#FFFFFF] font-poppins text-[30px]'>{data.governor.date}</p>  
        </div>  
      </div>  
      })} 

      {governorData.map((data) =>{
        return <div className='relative flex h-[32rem] items-center' key={data.viceGovernor.name}> 
        <img src={data.viceGovernor.img} alt="" 
        className='rounded-[42px] border-2 w-[350px] object-cover border-[#B00A0A] z-10 right-0 mr-20  
        h-[100%] absolute'/>    
        <div className='flex flex-col bg-[#E7AC10] bg-opacity-[80%] w-full pr-[30em] h-[20rem] items-end py-4'>  
          <h2 className='uppercase font-lexend font-semibold text-[4rem] text-[#B00A0A] mb-10'>{data.viceGovernor.position}</h2>  
          <h5 className='text-[#FFFFFF] font-poppins text-[40px]'>{data.viceGovernor.name}</h5> 
          <p className='text-[#FFFFFF] font-poppins text-[30px]'>{data.viceGovernor.date}</p>   
        </div>  
      </div>   
      })} 
      
    </div>  
  ) 
} 

export default AboutGovernor
