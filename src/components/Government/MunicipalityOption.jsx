import React from "react";
import data from "/src/Data.js";

function MunicipalityOption({setMunicipality}) {
  return (
    <>
      {data[0].municipality.map((data) => (
        <h1 className="cursor-pointer hover:bg-slate-300 p-1 rounded-[2px]" onClick={() => setMunicipality(data)}>
          {data}
        </h1>
      ))}
    </>
  );
}

export default MunicipalityOption;
