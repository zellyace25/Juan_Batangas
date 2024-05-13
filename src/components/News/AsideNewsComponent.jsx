import React from 'react'

const AsideNewsComponent = ({img, sub, time, title}) => {
  return (
    <div className='flex gap-8 items-center w-full '>
      <div className='w-[40%] '> 
        <img src={img} alt="" 
        className='h-[190px] w-full max-w-[300px] object-cover'/> 
      </div>
      <div className='w-[60%] flex flex-col gap-8 border'>
        <div className='flex items-center gap-8'>
            <p className='font-poppins text-white bg-[#B00A0A] px-6 py-3'>
                {sub}</p>
            <p className='font-poppins text-[#424242]'>{time}</p>
        </div> 
        <h3 className='font-poppins font-semibold text-[20px]'>{title}</h3>
      </div>
    </div>
  )
}

export default AsideNewsComponent
