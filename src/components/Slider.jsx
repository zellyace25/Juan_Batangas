import React from "react";

function Slider({ carousel }) {
  return (
    <div className="relative flex flex-col gap-5 p-3 text-white shadow-lg rounded-xl h-[200px] w-[300px] lg:h-[250px] lg:w-[400px] group overflow-hidden cursor-pointer  mb-10 justify-end  ">
      <div
        className="absolute inset-0 bg-center bg-cover rounded-xl"
        style={{ backgroundImage: `url(${carousel})` }}
      />
      <div className="absolute inset-0 h-full bg-black opacity-10 group-hover:opacity-50 flex justify-center" />
    </div>
  );
}

export default Slider;
