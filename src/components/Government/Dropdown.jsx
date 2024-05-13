import React, { useContext, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { districtData, municipalityData } from '../../constant/mapData';
import { MapContext } from '../../pages/Government/MapSection';

const Dropdown = ({title, value}) => {

    const [isShow, setShow] = useState(false)
    
    const {setData} = useContext(MapContext)
    const {data} = useContext(MapContext)

    const handleClick = (props) =>{
      setData(props) 
    }
    
  return (
    <div className=' bg-[#F9F9F9] rounded-[15px] p-4 relative hover:cursor-pointer
     drop-shadow-mapContainer'
     onClick={() => setShow(!isShow)}>
      <div className='flex justify-between'>
        <p className=' font-poppins text-[22px] text-[#B9B9B9]'>{data}</p>
        <KeyboardArrowDownIcon />
      </div>
      {value === 'districts' && isShow && <div className=''>
        {districtData.map((district, i) => {
            return <ul key={i} className=' p-4'>
                <li className=' font-poppins text-[20px]'
                 onClick={() => handleClick(district.name)}>{district.name}</li>
            </ul>
        })}
        </div>}
      {value === 'city' && isShow && <div className=''>
        {municipalityData.map((city, i) =>{
          return <ul key={i} className=' p-4 '>
            <li className=' font-poppins text-[20px]'>{city.name}</li>
          </ul>
        })}
        </div>}
    </div>
  )
}

export default Dropdown
