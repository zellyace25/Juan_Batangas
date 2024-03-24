import React from "react";

function CarouselPrograms({ icon, program, detail }) {
  return (
    <div className="w-full h-full bg-[#FAFAFA] p-7 justify-center flex flex-col gap-5 rounded-2xl cursor-pointer">
      <img className="h-[50px] w-[50px]" src={icon} />
      <h1 className="gradient-text text-[24px] font-semibold">{program}</h1>
      <h1 className="text-[#4A5568]">{detail}</h1>
    </div>
  );
}

export default CarouselPrograms;
