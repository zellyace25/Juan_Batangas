import React, { useState } from "react";
import Health from "./HelpProgram/Health";
import Educ from "./HelpProgram/Educ";
import Livelihood from "./HelpProgram/Livelihood";
import Protect from "./HelpProgram/Protect";
import { bgHelp } from "../Images";

function HELPPrograms() {

  const [healthActive, setHealthActive] = useState('default')
  const [educActive, setEducActive] = useState('');
  const [liveActive, setLiveActive] = useState('')
  const [protectActive, setProtectActive] = useState('')

  const handleClick = (props) =>{
    if (props === 'healthActive'){
      setHealthActive('default')
      setEducActive('')
      setLiveActive('')
      setProtectActive('')
    } else if (props === 'eductActive'){
      setHealthActive('')
      setEducActive('default')
      setLiveActive('')
      setProtectActive('')
    } else if (props === 'liveActive'){
      setHealthActive('')
      setEducActive('')
      setLiveActive('default')
      setProtectActive('')
    } else if (props === 'protectActive'){
      setHealthActive('')
      setEducActive('')
      setLiveActive('')
      setProtectActive('default')
    }
  }

  return (
    <div className="border flex flex-col gap-8 bg-[#F5F5F5] px-[4rem]"
    style={{background: `url(${bgHelp})`, backgroundColor:'rgb(245, 245, 245)', backgroundSize: '600px', backgroundRepeat: 'no-repeat', backgroundPosition: 'top right'}}>
        <h1 className="gradient-text font-bold text-[70px] pl-4 mt-14 mb-10">
          H-E-L-P PROGRAM
        </h1>
       <div className="flex relative">
          <div className="w-full">
            {/* for icons */}
            <div className=" absolute flex w-full justify-evenly">
              <div className={`${healthActive === 'default' ? 'text-[#E7AC10]' : 'text-[#830600]'}
               text-center items-center flex  flex-col text-[35px] font-poppins font-semibold hover:cursor-pointer`}>
                <svg width="130" height="130" viewBox="0 0 306 306" fill="none" xmlns="http://www.w3.org/2000/svg"
                onClick={() => handleClick('healthActive')}>
                  <circle cx="153" cy="153" r="133.5" fill={`${healthActive === 'default' ? "white" : "#830600"}`} stroke={`${healthActive === 'default' ? "#E7AC10" : "#F5F5F5"}`} stroke-width="39"/>
                  <path d="M186.256 144.547H176.024H186.256ZM176.024 144.547H165.791H176.024ZM176.024 144.547V134.315V144.547ZM176.024 144.547V154.78V144.547Z" fill="white"/>
                  <path d="M186.256 144.547H176.024M176.024 144.547H165.791M176.024 144.547V134.315M176.024 144.547V154.78" stroke="white" stroke-width="7.67442" stroke-linecap="round"/>
                  <path d="M153 127.019L150.196 129.639C150.555 130.023 150.989 130.329 151.472 130.539C151.954 130.748 152.474 130.856 153 130.856C153.526 130.856 154.046 130.748 154.528 130.539C155.011 130.329 155.445 130.023 155.804 129.639L153 127.019ZM105.173 168.502C105.426 168.948 105.766 169.339 106.173 169.651C106.58 169.964 107.045 170.191 107.541 170.321C108.037 170.45 108.555 170.479 109.062 170.405C109.57 170.332 110.057 170.157 110.496 169.891C110.935 169.626 111.316 169.275 111.617 168.86C111.918 168.445 112.133 167.973 112.249 167.474C112.364 166.974 112.379 166.456 112.291 165.951C112.203 165.446 112.015 164.963 111.737 164.532L105.173 168.502ZM125.05 181.236C124.703 180.856 124.283 180.55 123.816 180.335C123.348 180.12 122.842 180.002 122.328 179.987C121.814 179.972 121.302 180.06 120.822 180.247C120.343 180.433 119.906 180.714 119.537 181.073C119.169 181.432 118.876 181.862 118.677 182.336C118.478 182.81 118.376 183.32 118.378 183.834C118.379 184.349 118.484 184.858 118.686 185.331C118.889 185.804 119.184 186.231 119.555 186.588L125.05 181.236ZM105.674 146.175C105.674 131.312 112.162 122.128 120.184 118.982C128.191 115.845 139.391 118.086 150.196 129.639L155.804 124.4C143.586 111.333 129.204 107.209 117.386 111.834C105.582 116.459 98 129.158 98 146.175H105.674ZM170.958 200.622C178.597 194.426 187.745 186.122 195.02 176.847C202.219 167.668 208 157.001 208 146.164H200.326C200.326 154.412 195.823 163.375 188.978 172.109C182.204 180.75 173.547 188.645 166.128 194.662L170.958 200.622ZM208 146.164C208 129.153 200.418 116.454 188.609 111.834C176.791 107.204 162.414 111.322 150.196 124.395L155.804 129.639C166.609 118.086 177.809 115.84 185.816 118.976C193.838 122.118 200.326 131.307 200.326 146.164H208ZM135.042 200.627C141.54 205.907 146.052 209.78 153 209.78V202.106C149.301 202.106 146.999 200.448 139.872 194.667L135.042 200.627ZM166.128 194.662C159.001 200.443 156.699 202.106 153 202.106V209.78C159.948 209.78 164.466 205.907 170.963 200.627L166.128 194.662ZM111.742 164.532C107.91 158.208 105.674 151.992 105.674 146.175H98C98 153.91 100.947 161.523 105.173 168.502L111.742 164.532ZM139.872 194.667C134.677 190.479 129.728 185.995 125.05 181.236L119.555 186.588C124.441 191.562 129.615 196.25 135.042 200.627L139.872 194.667Z" 
                  fill={`${healthActive === 'default' ? "#830600" : "white"}`}/>
                </svg>
                <p>Health</p>
              </div>

              <div className={`${educActive === 'default' ? 'text-[#E7AC10]' : 'text-[#830600]'}
               text-center items-center flex  flex-col text-[35px] font-poppins font-semibold hover:cursor-pointer`}>
                <svg width="130" height="130" viewBox="0 0 306 306" fill="none" xmlns="http://www.w3.org/2000/svg" 
                onClick={() => handleClick('eductActive')}>
                  <circle cx="153" cy="153" r="133.5" fill={`${educActive === 'default' ? "white" : "#830600"}`} stroke={`${educActive === 'default' ? "#E7AC10" : "#F5F5F5"}`} stroke-width="39"/>
                  <path d="M153.677 155.984C147.968 151.764 139.413 144.384 114.885 144.384V197.225C139.413 197.225 147.968 204.605 153.677 208.825M153.677 155.984V208.825M153.677 155.984C159.385 151.764 167.94 144.384 192.468 144.384V197.225C167.94 197.225 159.385 204.605 153.677 208.825M168.833 110.416V128.976M182.394 110.004H131.438C130.015 110.002 128.619 110.398 127.409 111.148L114 119.497L127.409 127.831C128.619 128.581 130.015 128.978 131.438 128.976H182.394C183.662 129.012 184.925 128.793 186.106 128.333C187.288 127.873 188.366 127.18 189.275 126.296C190.185 125.412 190.908 124.354 191.402 123.186C191.895 122.017 192.15 120.762 192.15 119.494C192.15 118.225 191.895 116.97 191.402 115.801C190.908 114.633 190.185 113.576 189.275 112.691C188.366 111.807 187.288 111.115 186.106 110.654C184.925 110.194 183.662 109.968 182.394 110.004Z" stroke-width="7.63161" stroke-linecap="round" stroke-linejoin="round"
                  stroke={`${educActive === 'default' ? "#E7AC10" : "white"}`}/>
                </svg>
                <p>Education</p>
              </div>

              <div className={`${liveActive === 'default' ? 'text-[#E7AC10]' : 'text-[#830600]'}
               text-center items-center flex  flex-col text-[35px] font-poppins font-semibold hover:cursor-pointer`}>
                <svg width="130" height="130" viewBox="0 0 306 306" fill="none" xmlns="http://www.w3.org/2000/svg" 
                onClick={() => handleClick('liveActive')}>
                  <circle cx="153" cy="153" r="133.5" fill={`${liveActive === 'default' ? "white" : "#830600"}`} stroke={`${liveActive === 'default' ? "#E7AC10" : "#F5F5F5"}`} stroke-width="39"/>
                  <path d="M154.652 143.572C154.652 151.833 149.696 163.398 149.696 163.398M151.348 146.877C151.348 146.877 156.304 133.659 144.739 123.746C133.174 113.833 115 117.137 115 117.137C115 117.137 115 130.355 124.913 140.268C134.826 150.181 151.348 146.877 151.348 146.877ZM154.652 140.268C154.652 140.268 149.696 127.05 161.261 117.137C172.826 107.224 191 110.529 191 110.529C191 110.529 191 123.746 181.087 133.659C171.174 143.572 154.652 140.268 154.652 140.268ZM128.217 163.398H171.174C171.174 163.398 174.478 193.137 149.696 193.137C124.913 193.137 128.217 163.398 128.217 163.398Z" stroke-width="9.91304" stroke-linecap="round" stroke-linejoin="round"
                  stroke={`${liveActive === 'default' ? "#E7AC10" : "white"}`}/>
                </svg>
                <p>Livelihood</p>
              </div>

              <div className={`${protectActive === 'default' ? 'text-[#E7AC10]' : 'text-[#830600]'}
               text-center items-center flex  flex-col text-[35px] font-poppins font-semibold hover:cursor-pointer`}>
                <svg width="130" height="130" viewBox="0 0 306 306" fill="none" xmlns="http://www.w3.org/2000/svg"
                onClick={() => handleClick('protectActive')}>
                  <circle cx="153" cy="153" r="133.5" fill={`${protectActive === 'default' ? "white" : "#830600"}`} stroke={`${protectActive === 'default' ? "#E7AC10" : "#F5F5F5"}`} stroke-width="39"/>
                  <path d="M153.4 210.5C140.253 207.19 129.399 199.646 120.837 187.868C112.275 176.091 107.996 163.015 108 148.643V114.025L153.4 97L198.8 114.025V148.643C198.8 163.019 194.521 176.096 185.963 187.874C177.405 199.651 166.551 207.193 153.4 210.5ZM153.4 198.582C162.575 195.745 170.236 190.14 176.384 181.767C182.532 173.395 186.126 164.056 187.166 153.75H153.4V109.059L119.35 121.828V151.196C119.35 151.858 119.445 152.71 119.634 153.75H153.4V198.582Z" 
                  stroke={`${protectActive === 'default' ? "#E7AC10" : "white"}`} fill={`${protectActive === 'default' ? "#E7AC10": "white"}`}/>
                </svg>
                <p>Protection</p>
              </div>
            </div>

            {/* for info */}
            <div className=" bg-white mt-16 rounded-[20px]">
              <div className="pt-20">
                {healthActive === 'default' && <Health/>}
                {educActive === 'default' && <Educ/>}
                {liveActive === 'default' && <Livelihood/>}
                {protectActive === 'default' && <Protect/>}
              </div>
            </div>
          </div>
       </div>
    </div>
  );
}

export default HELPPrograms;
