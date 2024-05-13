import React from 'react'
import HealthInfor from './HealthInfor'
import SelectDistrict from '../../components/SelectDistrict'
import { scholarship } from '../../Images'


const Educ = () => {
  return (
    <div className='mt-20'>
      <div className='flex flex-col gap-8'>
        <div>
            <HealthInfor text={'Construction of school building and provision of “computers”'}/>
        </div>
        <div>
            <HealthInfor text={'Provision of “tablets” to Public School Teachers and Barangay Captains'}/>
        </div>
        <div>
            <HealthInfor text={'Increase the number of “Batangas Provincial Scholars” from 25,000 to 30,000, for the Senior High School and College students in a span of three years'}/>
        </div>
        <div>
            <HealthInfor text={'Free internet connection or wireless fidelity in schools and Barangay Halls'}/>
            <SelectDistrict/>
        </div>
      </div>
      <div className=' bg-[#830600] p-10 mt-8'>
        <h3 className='text-[#E7AC10] font-lexend text-[35px] font-semibold'>
            Unlock Your Potential with Scholarships in Batangas!</h3>
        <div className='mt-8 flex mr-[10rem] gap-8 p-5 rounded-t-[50px] rounded-l-none
         border-t border-r'>
            <div className=''>
                <p className='font-poppins text-white text-[18px] leading-[3rem]'>
                    Whether you're pursuing undergraduate, graduate, or vocational education, there's a scholarship tailored to your unique talents and aspirations.</p>
                <button className=' bg-[#E7AC10] text-[#830600] p-4 rounded-[50px] mt-8 font-poppins'>
                    More Information</button>
            </div>
            <div className='rounded-b-none rounded-r-[50px] overflow-hidden'>
                <img src={scholarship} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Educ
