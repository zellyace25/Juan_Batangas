import React from 'react'
import HealthInfor from './HealthInfor'
import SelectDistrict from '../../components/SelectDistrict'

const Health = () => {
  return (
    <div className='mt-20 flex flex-col gap-8 pb-8'>
      <div>
        <HealthInfor text={"Additional free medicines, equipment and personnel in all the district hospitals in the province"}/>
        <SelectDistrict/>
      </div>
      <div>
        <HealthInfor text={'Fee medical consultations and medicines in all the district hospitals in the province for the less fortunate Batangueños'}/>
      </div>
      <div>
        <HealthInfor text={'Blood Donation Drive'}/>
        <SelectDistrict/>
      </div>
      <div>
        <HealthInfor text={'Medical Mission Program'}/>
        <SelectDistrict/>
      </div>
      <div>
        <HealthInfor text={'20% Increase in the honorarium and additional equipment for the Barangay Health Workers, Barangay Nutrition Scholars, Barangay Tanods and Day Care Workers'}/>
      </div>
      <div>
        <HealthInfor text={'Free PhilHealth Cards with double benefits for the Barangay Officials \n (Chairman, Kagawad, Secretary/Treasurer/etc.) and Volunteers (BHW, BNS, DCW, Barangay Tanod, etc.)'}/>
      </div>
      <div>
        <HealthInfor text={'Double benefits for the Senior Citizens with PhilHealth cards and allowances for the Senior Citizen Presidents'} />
      </div>
    </div>
  )
}

export default Health
