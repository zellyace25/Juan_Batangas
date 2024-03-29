import React from 'react'
import NewsComponent from '../../components/Government/News/NewsComponent'
import { newsData } from '../../constant'

const SideSection = () => {
  return (
    <div className=' flex-1 flex flex-col gap-12'> 
      {newsData[0].aside.map((news, i)=>{ 
        return <NewsComponent key={i} {...news}/>
      })} 
    </div>
  )
}

export default SideSection
