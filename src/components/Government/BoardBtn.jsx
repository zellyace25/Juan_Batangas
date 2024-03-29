import React, { useState } from 'react'

const BoardBtn = ({ text, icon, update }) => {
  
  return (
    <div className={`flex items-center gap-4 p-6 rounded-[62px]
    ${update ? 'bg-[#F1BFBF]' : 'bg-[#FFFFFF]'}`}>  
      <a href="">{icon}</a>  
      <p className={`font-lexend text-3xl ${update ? "text-[#B00A0A]" : "text-[#888B97]"}`}>
        {text} 
      </p>
    </div>     
  );
};

export default BoardBtn;
 