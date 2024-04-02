import React from "react";

function VisionMission({ title, content }) {
  return (
    <div className="bg-[#F5F5F5] h-[250px] w-[450px] p-10 rounded-3xl flex flex-col justify-center gap-2">
      <div className="bg-[#DC4200] h-[30px] w-[150px] opacity-[10%]"></div>
      <h1 className="font-semibold font-poppins text-[24px]">{title}</h1>
      <p className="text-[#525252] text-[13px]">{content}</p>
    </div>
  );
}
  
export default VisionMission;
