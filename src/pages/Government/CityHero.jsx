import React from 'react'
import { mapImg } from '../../constant'

const CityHero = () => {
  return (
    <div className='flex gap-8 py-4 pb-10 justify-between w-full bg-primary border border-black'>
       <div className=' border border-green-300 '>
            <img src={mapImg} alt="" 
                className='object-cover '/> 
       </div>
      <div className='pt-8 border border-blue-800'>
        <h1 className='font-lexend font-medium text-[75px] text-end text-[#830600]
         pr-8 pb-[3rem] drop-shadow-textShadow'>
            Municipalities And Cities</h1>
        <div className='bg-white text-center ml-32 p-10 rounded-l-[50px] 
         drop-shadow-boxShadow flex justify-end'>
            <div className='flex font-poppins text-[#830600] font-medium text-[30px]
             ml-auto'>
                <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.0001 27C27.7957 27 28.5587 26.6839 29.1213 26.1213C29.6839 25.5587 30 24.7956 30 24V16.674C30 15.8783 29.6839 15.1153 29.1213 14.5527C28.5587 13.9901 27.7957 13.674 27.0001 13.674H22.8361C22.8361 12.62 22.8981 11.566 23.0221 10.512C23.2081 9.396 23.5181 8.404 23.9521 7.536C24.3861 6.668 24.9451 5.985 25.6291 5.487C26.3091 4.929 27.1771 4.65 28.233 4.65V0C26.4971 0 24.9771 0.372 23.6731 1.116C22.3782 1.85062 21.2656 2.86786 20.4182 4.092C19.565 5.43945 18.9368 6.91676 18.5582 8.466C18.1754 10.1752 17.9882 11.9225 18.0002 13.674V24C18.0002 24.7956 18.3163 25.5587 18.8789 26.1213C19.4415 26.6839 20.2045 27 21.0002 27H27.0001ZM9.00038 27C9.79602 27 10.5591 26.6839 11.1217 26.1213C11.6843 25.5587 12.0003 24.7956 12.0003 24V16.674C12.0003 15.8783 11.6843 15.1153 11.1217 14.5527C10.5591 13.9901 9.79602 13.674 9.00038 13.674H4.83646C4.83646 12.62 4.89846 11.566 5.02245 10.512C5.21045 9.396 5.52045 8.404 5.95244 7.536C6.38643 6.668 6.94542 5.985 7.62941 5.487C8.3094 4.929 9.17738 4.65 10.2334 4.65V0C8.49739 0 6.97742 0.372 5.67344 1.116C4.37849 1.85062 3.26591 2.86786 2.4185 4.092C1.56535 5.43945 0.937152 6.91676 0.558537 8.466C0.175694 10.1752 -0.0115056 11.9225 0.000546874 13.674V24C0.000546874 24.7956 0.316612 25.5587 0.87921 26.1213C1.44181 26.6839 2.20486 27 3.00049 27H9.00038Z" fill="#830600"/>
                </svg>
               <p> Home to a vibrant array of <br /> cities and municipalities, <br />each 
                offering its own unique <br /> charm and its attractions.</p>
                <div className=' flex items-end mb-4'>
                    <svg width="30" className='' height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.99994 0C2.20431 0 1.44126 0.316071 0.878664 0.878681C0.316065 1.44129 0 2.20435 0 3V10.326C0 11.1217 0.316065 11.8847 0.878664 12.4473C1.44126 13.0099 2.20431 13.326 2.99994 13.326H7.16387C7.16387 14.38 7.10187 15.434 6.97787 16.488C6.79188 17.604 6.48188 18.596 6.04789 19.464C5.6139 20.332 5.05491 21.015 4.37092 21.513C3.69093 22.071 2.82295 22.35 1.76697 22.35V27C3.50294 27 5.02291 26.628 6.32689 25.884C7.62184 25.1494 8.73442 24.1321 9.58183 22.908C10.435 21.5606 11.0632 20.0832 11.4418 18.534C11.8246 16.8248 12.0118 15.0775 11.9998 13.326V3C11.9998 2.20435 11.6837 1.44129 11.1211 0.878681C10.5585 0.316071 9.79547 0 8.99984 0H2.99994ZM20.9996 0C20.204 0 19.4409 0.316071 18.8783 0.878681C18.3157 1.44129 17.9997 2.20435 17.9997 3V10.326C17.9997 11.1217 18.3157 11.8847 18.8783 12.4473C19.4409 13.0099 20.204 13.326 20.9996 13.326H25.1635C25.1635 14.38 25.1015 15.434 24.9775 16.488C24.7895 17.604 24.4796 18.596 24.0476 19.464C23.6136 20.332 23.0546 21.015 22.3706 21.513C21.6906 22.071 20.8226 22.35 19.7666 22.35V27C21.5026 27 23.0226 26.628 24.3266 25.884C25.6215 25.1494 26.7341 24.1321 27.5815 22.908C28.4346 21.5606 29.0628 20.0832 29.4415 18.534C29.8243 16.8248 30.0115 15.0775 29.9995 13.326V3C29.9995 2.20435 29.6834 1.44129 29.1208 0.878681C28.5582 0.316071 27.7951 0 26.9995 0H20.9996Z" fill="#830600"/>
                    </svg>
                </div>
            </div>
        </div>
      </div>      
    </div>
  )
}

export default CityHero