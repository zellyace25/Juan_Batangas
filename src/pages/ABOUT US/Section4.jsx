import React from "react";
import resources from "../../Resources";
import ImageVisit from "../../components/ImageVisit";

function Section4() {

  return (
    <div className="flex flex-col justify-center items-center bg-[#F5F5F5]">
      <div className="flex gap-5">
        <h1 className="text-[#28AEBD] text-[44px] font-serif font-bold">
          Fun.
        </h1>
        <h1 className="text-[#84C73C] text-[44px] font-serif font-bold">
          Food.
        </h1>
        <h1 className="text-[#F3AE4F] text-[44px] font-serif font-bold">
          Faith.
        </h1>
      </div>
      <h1 className="text-[#CB3C40] text-[54px] bg-white px-48 rounded-3xl font-serif font-bold">
        RICH BATANGAS
      </h1>

      <div className="h-[500px] w-full relative flex justify-end items-end mt-20">
        <div className="w-[90%] top-0 gap-10 flex justify-center items-center h-[400px] absolute ">
          {resources[0].visits.map((visit, i) => (
            <ImageVisit key={i} visit={visit}/>
          ))}
        </div>
        <div className="w-[90%] bg-[#830600] h-[350px] rounded-tl-[200px] "></div>
      </div>
    </div>
  );
}

export default Section4;
