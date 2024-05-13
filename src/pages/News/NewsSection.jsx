import React from 'react'
import SideSection from './SideSection'
import AsideSection from './AsideSection'

const NewsSection = () => {
  return (
    <div className='bg-primary p-[5rem]'>
      <div className='flex  gap-20'>
        <SideSection/>
        <AsideSection/>
      </div> 
      <div className='bg-[#E7AC10] flex p-8 text-white rounded-[20px] items-center mt-8'>
        <div className='flex-1 flex flex-col gap-4 mr-12'>
            <h3 className='font-poppins text-[40px]'>Stay in the Loop</h3>
            <p className='font-poppins text-[20px] '>
              Subscribe to receive the latest news and updates about Batangas We promise not to spam you! </p>
        </div>  
        <div className='flex ml-8'> 
          <form action="" className='flex bg-white rounded-[11px] items-center px-4'>
            <input type="mail"
            placeholder='Enter email address'
            className='text-black h-[50px] outline-none w-[300px]' /> 
            <button className='m-4 p-4 bg-[#E7AC10] font-lexend font-semibold rounded-[7px]'>
              Subscribe Now</button> 
          </form>
        </div>
      </div>
    </div> 
  )
}

export default NewsSection
