import React from 'react'
import HealthInfor from './HealthInfor'
import { FaArrowRightLong } from "react-icons/fa6";
import SelectDistrict from '../../components/SelectDistrict';

const Livelihood = () => {
  return (
    <div className='mt-20 pb-8'>
        <div className='flex flex-col gap-8'>
            <HealthInfor text={'Providing fast and reliable processing of papers of investors who will capitalize in the province'}/>
            <HealthInfor text={'Construction of Food Terminal for the processing/storage of agricultural and imported/exported products'}/>
            <HealthInfor text={'Appropriation of Php 500M fund to strengthen the cooperative and livelihood in the province'}/>
            <HealthInfor text={'Intensification of tourism and agricultural campaigns of the province'}/>
            <HealthInfor text={'Provision of Lifetime pension to all barangay officials'}/>
            <HealthInfor text={'Coordinate with the private sector and investors to open job opportunities'}/>
        </div>
        <div className='border border-[#E7AC10] m-[5rem] mb-0 rounded-[50px] relative flex
         p-[4rem]'>
            <div className=' w-[60%]'>
                <p className='text-[#060606] font-poppins text-[40px] font-semibold mb-4'>
                    Increasing job opportunities to boost the economy</p>
                <p className='text-[#292D34] font-poppins text-[16px] leading-8'>
                    Explore exciting career opportunities amidst the vibrant landscape of Batangas! From bustling industrial hubs to serene coastal towns, job hiring in Batangas offers a diverse array of prospects across multiple sectors.</p>
                <div className='bg-[#E7AC10] w-[300px] px-8 py-4 flex items-center gap-4 mt-10'>
                    <p className='text-white font-poppins'>Job Hunting oppurtunities</p>
                    <FaArrowRightLong color='white'/>
                </div>
            </div>
            <div className='w-[40%] ml-4'>
                <SelectDistrict mode={'live'}/>
            </div>
            {/* absolute */}
            <div className='absolute top-[-15px] bg-[#830600] px-4 py-2 rounded-[20px]'>
                <p className='uppercase text-white text-[14px] font-poppins'>Discover Your Next Career Opportunity in Batangas!</p>
            </div>
        </div>
    </div>
  )
}

export default Livelihood
