import React from "react";

function ImageCard({ image, location, fiesta, details }) {
  return (
    <div className="flex flex-col rounded-3xl shadow-2xl w-[350px] h-[500px]">
      <img src={image} className="w-full h-[200px] rounded-tr-3xl rounded-tl-3xl "/>
      <div className="py-5 px-7">
        <h1 className="text-[#E7AC10] font-bold text-[20px]">{location}</h1>
        <h1 className="font-bold text-[25px]">{fiesta}</h1>
        <p className="text-[16px]">{details}</p>
      </div>
    </div>
  );
}

export default ImageCard;
