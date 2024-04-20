import React from 'react'
import { governorData } from '../../constant'

const GovernorBadge = ({data}) => {
  return (
    <div>
        <div className='flex relative h-[30rem] items-center'>
            <img src={data.img} alt=""
             className={`absolute h-full rounded-[40px] border border-[#B00A0A] 
              ${data.id === 1 ? 'left-[80px]': 'right-[80px] w-[25%]'}`} /> 
            <div className={`flex flex-col w-full h-[20rem] justify-between py-10 
             ${data.id === 1 ? 'pl-[28rem] bg-[#830600]' : 'pl-[26rem] bg-[#fcc351]'}`}> 
                <h2 className={`font-lexend uppercase font-medium text-[55px] 
                 ${data.id === 1 ? 'text-[#FDC221]': 'text-[#B00A0A]'}`}>
                    {data.position}</h2>
                <div> 
                    <h5 className='font-poppins uppercase text-white font-medium
                    text-[35px]'>
                        {data.name}</h5>
                    <p className='font-poppins text-white text-[25px]'>{data.date}</p> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default GovernorBadge
