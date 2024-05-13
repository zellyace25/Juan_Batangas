import React from 'react'
import { helpData } from '../../constant/map'

const HealthInfor = ({text}) => {
  return (
    <div className='flex gap-8 items-center'>
      <div>
        <svg width="120" height="22" viewBox="0 0 185 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M163.333 11C163.333 16.891 168.109 21.6667 174 21.6667C179.891 21.6667 184.667 16.891 184.667 11C184.667 5.10895 179.891 0.333317 174 0.333318C168.109 0.333318 163.333 5.10895 163.333 11ZM1.74846e-07 13L174 13L174 8.99998L-1.74846e-07 9L1.74846e-07 13Z" fill="#E7AC10"/>
        </svg>
      </div>
      <div>
        <p className=' font-poppins text-[#060606] text-[20px] leading-[3rem]'
         style={{whiteSpace: 'pre-wrap'}}>{text}</p>
      </div>
    </div>
  )
}

export default HealthInfor
