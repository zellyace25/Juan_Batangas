import React, { useState } from 'react'
import BoardBtn from '../../components/Government/BoardBtn'
import SvgOne from '../../components/Government/SvgOne'
import SvgTwo from '../../components/Government/SvgTwo'
import GovernmentTable from '../../components/Government/GovernmentTable'
import { boardMembers, departmentHeads } from '../../constant'


const BoardMembers = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [isClicked2, setIsClicked2] = useState(false)
  const [value, setValue] = useState('default')

  const handleClickOne = () =>{
    setIsClicked(!isClicked)
    setIsClicked2(false)
    setValue("default")

  }

  const handleClickTwo = () =>{
    setIsClicked2(!isClicked2)
    setIsClicked(false) 
    setValue('table2')    
  }
  return (
    <div>
      <div className='flex justify-center items-center gap-8 relative'> 
        <div onClick={handleClickOne} className=' cursor-pointer'>    
          <BoardBtn 
            text="Board Members" 
            icon={<SvgOne fill={isClicked ? "#B00A0A": "#888B97"} />}
            update={isClicked} 
          />        
        </div>  
        <div onClick={handleClickTwo} className='cursor-pointer'>
          <BoardBtn 
            text="Department Heads" 
            icon={<SvgTwo fill={isClicked2 ? "#B00A0A": "#888B97"} />}
            update={isClicked2}
          />       
        </div>
        <div className='bg-[#830600] h-[51px] w-[300px] absolute left-0'></div>
        <div className='bg-[#830600] h-[51px] w-[300px] absolute right-0'></div>
      </div>  
      <div className='mt-8'> 
        {value === 'default' && <GovernmentTable columns={2} data={boardMembers}/>}  
        {value === 'table2' && <GovernmentTable columns={3} data={departmentHeads}/>} 
      </div>    
    </div>
  )
}

export default BoardMembers
