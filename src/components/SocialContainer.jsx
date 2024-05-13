import React from "react";
import {curly} from "/src/Images.js";

function SocialContainer({social, icon, socialName }) {
  return (
    <div className="h-[120px] w-[460px] bg-white rounded-3xl relative px-28 flex flex-col justify-center gap-2">
    <img src={curly} className="h-[120px] absolute left-0"/>
      <h1 className="text-[#830600] text-[26px] font-bold">{social}</h1>
      <div className="flex items-center gradient-bg  text-white w-[250px] gap-3 px-5 rounded-xl h-[40px]">
        <img src={icon} className="h-[30px]"/>
        <h1>{socialName}</h1>
      </div>
    </div>
  );
}

export default SocialContainer;
