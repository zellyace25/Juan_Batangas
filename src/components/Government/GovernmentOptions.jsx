import React from 'react'
import { useNavigate } from 'react-router-dom'
import DropdownOption from '../DropdownOption'

const GovernmentOptions = () => {
    const navigate = useNavigate()
  return (
    <div className="w-[200px] border-solid border-2 border-gray-300 flex flex-col justify-center
     gap-5 absolute top-10 right-[580px] bg-white rounded-bl-[20px] rounded-br-[20px] z-50 p-3 ">
      <DropdownOption
        program="Government Officials"
        handleClick={() => navigate("/Government/Officials")}
      />
      <DropdownOption
        program="Government Municipalities"
        handleClick={() => navigate("/Government/Municipalities")}
      />
    </div>
  )
}

export default GovernmentOptions
