import React, { useContext, useEffect } from 'react'
import { MapContext } from '../../pages/Government/MapSection'
import { MapContainer, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import '../../index.css'
import { useState } from 'react'

const CityInfo = ({ value }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const data = value;
  const { setMap } = useContext(MapContext);

  const handleClick = (props) => {
    setMap(props);
};

  const btnClick = (action) => {
    if (action === 'next' && activeIndex + 5 < data.length) {
        setActiveIndex(activeIndex + 5);
    } else if (action === 'prev' && activeIndex - 5 >= 0) {
        setActiveIndex(activeIndex - 5);
    }
  };

  return (
      <div className='bg-[#F9F9F9] px-8 py-10 rounded-[10px] drop-shadow-mapContainer 
       h-[900px] flex  flex-col  border border-yellow-400'>
          {data.slice(activeIndex, activeIndex + 4).map((item, i) => {
              return (
                  <div key={i} onClick={() => handleClick(item.longLang)}
                      className='flex gap-5 bg-[#e4c97e] mb-6 py-4 px-8 rounded-[17px] drop-shadow-mapShadow 
                      text-[18px] h-[180px] hover:cursor-pointer'>
                      <div className='w-[30%] overflow-hidden'>
                          <MapContainer center={item.longLang} zoom={11} scrollWheelZoom={false} zoomControl={false}>
                              <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                          </MapContainer>
                      </div>
                      <div className='gap-2 w-[70%] flex flex-col justify-center container'>
                          <p className='font-poppins text-[#830600] font-[700] text-[15px]'>{item.city}</p>
                          <p className='font-bold text-[#434343] text-[15px]'>Website:
                              <a className='font-light' target='_blank' href={item.website}>{item.website}</a></p>
                          <p className='font-bold text-[#434343] text-[15px]'>Facebook Page:
                              <a className='font-light' href={item.fbPage}>{item.fbPage}</a></p>
                          <p className='font-bold text-[#434343] text-[15px]'>Emergency Hotline:
                              <a className='font-light'>{item.hotline}</a></p>
                      </div>
                  </div> 
              );
          })}
          <div className='flex justify-between mt-auto'>
            {activeIndex > 0 && <p className='font-poppins text-[20px] text-[#3e3e3e] font-[500] text-end mt-2 hover:cursor-pointer'
             onClick={() => btnClick('prev')}>Previous page</p>}
            <p className='font-poppins text-[20px] text-[#3e3e3e] font-[500] text-end mt-2 ml-auto hover:cursor-pointer' 
             onClick={() => btnClick('next')}>Next page</p>
          </div>
      </div>
  );
};

export default CityInfo;