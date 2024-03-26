import React from 'react'

const BadgeTitle = ({district}) => {
  return (
    <div className='absolute bottom-[30px] left-[20px] bg-[#FAF1D1] px-4 py-3 rounded-[20px]'>
      <p className='font-lexend text-sm text-[#830600]'>{district}</p> 
    </div>
  )
}

export default BadgeTitle
