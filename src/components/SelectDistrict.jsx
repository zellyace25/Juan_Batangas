import React, { useState } from 'react'
import { FaLeaf } from 'react-icons/fa';
import { MdKeyboardArrowRight ,MdKeyboardArrowDown} from "react-icons/md";
import { districtDataHelp } from '../constant/mapData';

const SelectDistrict = ({mode}) => {

    const [showDistrict, setShowDistrict] = useState(false)
    const [showMunicipality, setShowMunicipality] = useState(false)
    const [district, setDistrict] = useState('District 1')
    const [municipality, setMunicipality] = useState('')
    const [avail, setAvail] = useState(true)

    const handleDistrict = () =>{
        setShowDistrict(prevState => !prevState);
    }

    const handleMunicipality = () =>{
        setShowMunicipality(prevState => !prevState)
        console.log(showMunicipality)
    }
    const changeDistrict = (props) =>{
        if (props === 'one'){
            setDistrict('District 1')
        } else if (props === 'two'){
            setDistrict('District 2')
        } else if (props === 'three'){
            setDistrict('District 3')
        } else if (props === 'four'){
            setDistrict("Distrcit 4")
        } else if (props === 'five'){
            setDistrict('District 5')
        } else{
            setDistrict('District 6')
        }
    }

  return (
    <div className={`${mode === 'live' ? 'flex flex-col gap-8' : 'flex gap-8 mt-4 ml-[10rem] w-[80%]'}`}>
      <div className='flex flex-col w-full relative'>
        <p className='text-[#69696B] font-poppins text-[14px] mb-3'>Select District</p>
        <div className='flex items-center gap-12 border border-[#ABABB5] p-2 hover:cursor-pointer'
         onClick={handleDistrict}>
            <MdKeyboardArrowRight/>
            <p className=' text-[#111111] font-poppins'>{district}</p>
            <MdKeyboardArrowDown className=' ml-auto'/>
        </div>
        {showDistrict && <div className='absolute pl-3 top-[70px] w-full border flex flex-col gap-3 pt-2 hover:cursor-pointer
         bg-white z-[99]'>
            <p className='text-[#111111] font-poppins' 
             onClick={()=>changeDistrict('one')}>District 1</p>
            <p className='text-[#111111] font-poppins' 
             onClick={()=>changeDistrict('two')}>District 2</p>
            <p className='text-[#111111] font-poppins' 
             onClick={()=>changeDistrict('three')}>District 3</p>
            <p className='text-[#111111] font-poppins' 
             onClick={()=>changeDistrict('four')}>District 4</p>
            <p className='text-[#111111] font-poppins' 
             onClick={()=>changeDistrict('five')}>District 5</p>
            <p className='text-[#111111] font-poppins' 
             onClick={()=>changeDistrict('six')}>District 6</p>
            
            </div>}
      </div>
      <div className='flex flex-col w-full relative'>
        <p className='text-[#69696B] font-poppins text-[14px] mb-3'>Select Municipality</p>
        <div className='flex items-center gap-12 border border-[#ABABB5] p-2 justify-between hover:cursor-pointer'
         onClick={handleMunicipality}>
            <MdKeyboardArrowRight/>
            <p>{municipality}</p>
            <MdKeyboardArrowDown className='ml-auto'/>
        </div>
        {showMunicipality && <div className=''>
                {districtDataHelp.map((info, i) =>{
                    if (district === 'District 1'){
                        console.log(district)
                        return (
                            <ul key={i} className='absolute flex flex-col gap-3 pt-2 pl-3 bg-white w-full z-[99]'>
                                {info.districtOne.map((city, i) =>{
                                    return <li className='text-[#111111] font-poppins hover:cursor-pointer'
                                    onClick={()=> {setMunicipality(city.name); setAvail(city.status)}}>
                                        {city.name}</li>
                                })}
                            </ul>
                        )
                    } else if (district === 'District 2'){
                        return (
                            <ul key={i} className='absolute flex flex-col gap-3 pt-2 pl-3 bg-white w-full z-[99]'>
                                {info.districtTwo.map((city, i) =>{
                                    return <li className='text-[#111111] font-poppins hover:cursor-pointer'
                                    onClick={()=> {setMunicipality(city.name); setAvail(city.status)}}>
                                        {city.name}</li>
                                })}
                            </ul>
                        )
                    } else if (district === 'District 3'){
                        return (
                            <ul key={i} className='absolute flex flex-col gap-3 pt-2 pl-3 bg-white w-full z-[99]'>
                                {info.districtThree.map((city, i) =>{
                                    return <li className='text-[#111111] font-poppins hover:cursor-pointer'
                                    onClick={()=> {setMunicipality(city.name); setAvail(city.status)}}>
                                        {city.name}</li>
                                })}
                            </ul>
                        )
                    } else if (district === 'District 4'){
                        return (
                            <ul key={i} className='absolute flex flex-col gap-3 pt-2 pl-3 bg-white w-full z-[99]'>
                                {info.districtFour.map((city, i) =>{
                                    return <li className='text-[#111111] font-poppins hover:cursor-pointer'
                                    onClick={()=> {setMunicipality(city.name); setAvail(city.status)}}>
                                        {city.name}</li>
                                })}
                            </ul>
                        )
                    } else if (district === 'District 5'){
                        return (
                            <ul key={i} className='absolute flex flex-col gap-3 pt-2 pl-3 bg-white w-full z-[99]'>
                                {info.districtFive.map((city, i) =>{
                                    return <li className='text-[#111111] font-poppins hover:cursor-pointer'
                                    onClick={()=> {setMunicipality(city.name); setAvail(city.status)}}>
                                        {city.name}</li>
                                })}
                            </ul>
                        )
                    } else{
                        return (
                            <ul key={i} className='absolute flex flex-col gap-3 pt-2 pl-3 bg-white w-full z-[99]'>
                                {info.districtSix.map((city, i) =>{
                                    return <li className='text-[#111111] font-poppins hover:cursor-pointer'
                                     onClick={()=> {setMunicipality(city.name); setAvail(city.status)}}>
                                        {city.name}</li>
                                })}
                            </ul>
                        )
                    }
                })}
            </div>}
      </div>
      <div className='flex flex-col gap-3 w-[30%]'>
        <p className='text-[#69696B] font-poppins text-[14px]'>Status</p>
        <p className={`${avail === true ? ' border-[#E7AC10] text-[#E7AC10]' 
         : 'border-red-500 text-red-500'} font-poppins border py-2 px-4`}>{avail === true ? 'Available' : 'Not Available'}</p>
      </div>
    </div>
  )
}

export default SelectDistrict
