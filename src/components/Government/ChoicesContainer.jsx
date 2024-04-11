import React from "react";
import data from "/src/Data.js";

function ChoicesContainer({setDistrict}) {
  return (
    <>
      {data.map((data) => (
        <h1 className="cursor-pointer hover:bg-slate-300 p-1 rounded-[2px]" onClick={() => setDistrict(data.district)}>
          {data.district}
        </h1>
      ))}
    </>
  );
}

export default ChoicesContainer;
