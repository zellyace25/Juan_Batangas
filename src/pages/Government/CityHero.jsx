import React from 'react'
import { mapImg } from '../../constant'

const CityHero = () => {
  return (
    <div className='flex gap-8 justify-between'>
    <img src={mapImg} alt="" />
      <div>
        <h1>Municipalities And Cities</h1>
        <div>
            <p>Home to a vibrant array of cities and municipalities, each 
                offering its own unique charm and attractions.</p>
        </div>
      </div>
    </div>
  )
}

export default CityHero
