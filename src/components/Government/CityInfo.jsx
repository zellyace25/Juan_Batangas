import React, { useContext, useEffect } from 'react'
import { MapContext } from '../../pages/Government/MapSection'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import '../../index.css'
import { useState } from 'react'

const CityInfo = ({value}) => {

    const data = value
    const { setMap} = useContext(MapContext)
    const { map } = useContext(MapContext)
    const {setLong} = useContext(MapContext)
    const { setLang} = useContext(MapContext)
    

    const handleClick = (props) =>{
      // console.log(`this ${props[0]}`)
      // console.log(`those ${props[1]}`)
      setMap(props)
      // setLong(long)
      // setLang(lang)

    } 

  return (
    <div className='bg-[#F9F9F9] px-8 py-10 rounded-[10px]'>
        {data.map((item, i) =>{
            return <div key={i} onClick={() => handleClick(item.longLang)}
             className='flex gap-5 bg-[#e4c97e] mb-6 py-4 px-8 rounded-[17px] drop-shadow-mapShadow 
              text-[18px] h-full'> 
                <div className='bg-red-400 w-[30%] overflow-hidden'>
                  <MapContainer center={item.longLang} zoom={11} scrollWheelZoom={false} zoomControl={false}>
                    <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                  </MapContainer>
                  {console.log(item.long)}
                </div>
                <div className='gap-2 w-[70%] my-8'>
                  <p className='font-poppins text-[#830600] font-[700]'>{item.city}</p>
                  <p className='font-bold text-[#434343]'>Website:   
                    <a className='font-light' href={item.website}>{item.website}</a></p>
                  <p className='font-bold text-[#434343]'>Facebook Page: 
                    <a className='font-light' href={item.fbPage}>{item.fbPage}</a></p>
                  <p className='font-bold text-[#434343]'>Emergency Hotline: 
                    <a className='font-light'>{item.hotline}</a></p>
                </div>
            </div>
        })}
        <p className='font-poppins text-[20px] text-[#3e3e3e] font-[500] text-end mt-2'>Next page</p>
    </div>
  )
}

export default CityInfo
