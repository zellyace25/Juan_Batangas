import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function ImageVisit({ visit, i }) {
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="relative flex flex-col  p-3 text-white h-[150px] lg:h-[430px] lg:w-[300px]  group overflow-hidden cursor-pointer mb-10 mt-5 "
      onClick={() => navigate(`/${visit.name}`)}
      onMouseOver={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
    >
      <div
        className="absolute inset-0 bg-center bg-cover rounded-sm  "
        style={{ backgroundImage: `url(${visit.photo})` }}
      />
      <div className="absolute inset-0 h-full group-hover:opacity-50 group-hover:bg-black flex justify-center rounded-[45px]" />
      <div className="relative flex ">
        {isHovering && (
          <div className="flex flex-col w-full lg:px-5 lg:py-5">
            <div className="bg-[#E7AC10] h-2 w-[180px]"></div>
            <p className="text-[30px]">{visit.name}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageVisit;
