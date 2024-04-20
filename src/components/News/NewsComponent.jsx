import React from 'react'

const NewsComponent = ({img, sub, time, title, text}) => {
  return (
    <div className='flex flex-col gap-8 mb-4 border-b-[1px] border-[#A5A5A5]'>
      <img src={img} alt="" />
      <div className='flex items-center gap-8'>
        <p className='bg-[#E7AC10] text-white p-4 font-poppins'>
            {sub}</p>
        <p className='font-poppins'>{time}</p>
      </div>
      <div className='flex flex-col gap-8 mb-12'>
        <h2 className='font-poppins font-semibold text-4xl'>{title}</h2>
        <p className='font-poppins text-xl text-[#515151] leading-[3rem]'>
            {text}</p> 
      </div>
    </div>
  )
}

export default NewsComponent
