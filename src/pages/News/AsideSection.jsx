import React from 'react'
import { newsData } from '../../constant'
import AsideNewsComponent from '../../components/Government/News/AsideNewsComponent'

const AsideSection = () => {
  return (
    <div className='flex-1 flex flex-col gap-12'>
      {newsData[1].side.map((news, i) =>{
        return <AsideNewsComponent key={i} {...news}/>
      })}
    </div>
  )
}

export default AsideSection
