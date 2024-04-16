import React from 'react'

function DropdownOption({handleClick, program}) {
  return (
    <h1 className='text-[#74768F] text-[16px] hover:bg-gray-400 cursor-pointer' onClick={handleClick}>{program}</h1>
  )
}

export default DropdownOption