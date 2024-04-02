import React from 'react'
import { governorBg, governorData } from '../../constant'
import GovernorBadge from '../../components/Government/GovernorBadge'

const GovernmentHero = () => {
  return (
    <div className='background-government'>
        <div className='flex justify-between space-x-12 items-center'>
            <div className='flex flex-col gap-12'>
                <div className='bg-[#FFFFFF] rounded-r-[40px] p-4 border-title pl-8'> 
                    <h1 className='font-lexend text-[#830600] text-6xl font-medium py-6'>
                        Leading Batangas</h1>
                </div>
                <div className='pl-8'>
                    <h1 className='font-poppins text-5xl title-stroke font-bold'>
                        A Closer Look at Government Officials</h1>
                </div>
            </div> 
            <div className='relative'> 
                <img src={governorBg} alt=""
                className='rounded-bl-[70px] border-img' />
                <div className='absolute bottom-[30px] left-[50px]'>
                    <div className='bg-white py-4 px-10 rounded-[28px]'>
                        <p className=' font-lexend font-semibold text-[#1B1C57] text-[20px]'>
                            Government Officials</p>
                        <p className=' text-[#68799F]'>Batangas</p>
                    </div>
                </div>  
            </div>  
        </div> 
        <div className='py-12'>  
            <GovernorBadge data={governorData[0].governor}/>
            <GovernorBadge data={governorData[0].viceGovernor}/>
        </div>
    </div>
  )
}

export default GovernmentHero
