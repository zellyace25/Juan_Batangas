import React from 'react'
import HealthInfor from './HealthInfor'

const Protect = () => {
  return (
    <div className=' mt-20 pb-8 flex flex-col gap-10 mr-12'>
      <HealthInfor text={'Provision of allowances and additional equipment for the Barangay Health Workers, Barangay Nutrition Scholars, Barangay Tanods and Day Care Workers'}/>
      <HealthInfor text={'Construction of roads, bridges, multi-purpose halls and water works'}/>
      <HealthInfor text={'Construction of evacuation centers for disaster preparedness'}/>
      <HealthInfor text={'Implementation of Housing projects for the government employees and affected families of relocation or disaster'}/>
      <HealthInfor text={'Acquisition of search and rescue operation vehicles, fire trucks and patrol cars'}/>
      <HealthInfor text={'Preservation of peace and order in the entire province'}/>
    </div>
  )
}

export default Protect
