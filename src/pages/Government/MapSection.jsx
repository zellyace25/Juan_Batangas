import React, { createContext, useEffect } from 'react'
import { useState } from 'react'
import {paperImg } from '../../constant'
import { district1 } from '../../constant/mapData'
import Dropdown from '../../components/Government/Dropdown'
import CityInfo from '../../components/Government/CityInfo'
import { MapContainer, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import '../../index.css'

export const MapContext = createContext();

const MapSection = () => {

  const [data, setData] = useState('1st District')
  const [map, setMap] = useState([13.755872, 121.058476]);
 
  return (
    <div className=' px-[5rem] pt-[10rem]' style={{background: `url(${paperImg})`, backgroundColor:'rgb(245 245 245)', backgroundSize:'cover'}}>
        <div className=' bg-white rounded-[50px] p-12'>
            <MapContext.Provider value={{ setData, setMap}}>
                <div className=' flex border border-purple-400 w-full gap-8 relative'>
                    <div className='flex flex-col flex-[.8] '>
                        <div className='flex flex-col gap-8'>
                            <Dropdown title={'Select Districts'} value={'districts'}/>
                            <Dropdown title={'Select Municipality/City'} value={'city'}/>
                        </div>
                        <div className='h-[600px] w-full bg-[#B30A05] p-6 mt-[5rem] rounded-[10px]'>  
                        <MapContainer key={`${map[0]}-${map[1]}`} center={map} zoom={12} scrollWheelZoom={false} zoomControl={false}>
                            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                        </MapContainer>
                        </div>  
                    </div>
                    {/* for map */}
                    <div className='flex-1'>
                        <div>
                            {data === '1st District' && <CityInfo value={district1}/>}
                            {data === '2nd District' && <p>gege</p>}  
                        </div>
                    </div>
                </div>
            </MapContext.Provider>
        </div>
    </div>
  )
}

export default MapSection
