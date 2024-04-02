import React from 'react'

const AsideNewsComponent = ({img, sub, time, title}) => {
  return (
    <div className='flex gap-8 items-center'>
      <div className=''> 
        <img src={img} alt="" 
        className='h-[190px] w-[300px]'/> 
      </div>
      <div className='flex flex-col gap-8'>
        <div className='flex items-center gap-8'>
            <p className='font-poppins text-white bg-[#B00A0A] px-6 py-3'>
                {sub}</p>
            <p className='font-poppins text-[#424242]'>{time}</p>
        </div> 
        <h3 className='font-poppins font-semibold text-[25px]'>{title}</h3>
      </div>
    </div>
  )
}

export default AsideNewsComponent
