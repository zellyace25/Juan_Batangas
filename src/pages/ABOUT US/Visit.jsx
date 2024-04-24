import React from "react";
import histories from "../../HistoryInfos";
import {
  visitLogo,
  transportation,
  bus,
  car,
  car1,
  Rectanglebg,
  pin,
} from "/src/Images.js";

function Visit() {
  return (
    <>
      {/* first section  */}
      <div className="flex overflow-hidden pb-10">
        <div className="w-[50%] py-10 px-36 font-poppins">
          <h1 className="text-[90px] font-bold text-[#830600] ">VISIT</h1>
          <h1 className="text-[50px] font-bold text-[#E7AC10]">BATANGAS</h1>
          <h1 className="text-[#828282] w-[80%]">
            One can reach the Batangas from various points of Luzon, which also
            depends on what part of the province are you heading to.
          </h1>
          <h1 className="bg-[#830600] px-5 py-3 rounded-3xl text-white w-fit my-10">
            Learn more below
          </h1>
        </div>
        <div className="w-[50%] flex justify-end relative">
          <img src={visitLogo} className="w-[450px] absolute  -top-10" />
        </div>
      </div>

      {/* second section  */}
      <div className="flex flex-col ">
        <img src={Rectanglebg} className=" absolute -z-10 top-[580px]" />
        <div className=" bg-[#FFE8C780] relative z-50">
          <h1 className="text-[48px] p-10 text-[#E7AC10] font-bold">
            TRANSPORTATION GUIDE
          </h1>

          <div className="flex pb-10 ">
            <div className="w-[50%] flex justify-center">
              <img src={transportation} className="w-[500px]" />
            </div>
            <div className="w-[50%]">
              <div className="bg-white w-[80%] rounded-lg flex flex-col items-center px-10 pt-20 pb-10 gap-3 relative">
                {histories[0].transportation.map((transport) => (
                  <h1 className="">{transport}</h1>
                ))}
                <img src={bus} className="absolute -top-8 w-[80px] left-5" />
              </div>
            </div>
          </div>
        </div>
        {/* third section  */}
        <div className="flex text-white py-10">
          <h1 className="w-[50%] flex justify-center items-center text-[50px] p-10">
            How to get there
          </h1>
          <h1 className="w-[50%] flex items-center py-10 pr-56 text-[18px]">
            Getting around Batangas can be done mostly by land transport (except
            for the town of Tingloy – the only island municipality, and the
            other islands of the province). You can roam around Batangas through
            bus, jeepney, or tricycle.
          </h1>
        </div>
        <div className="flex gap-10 justify-center pb-20">
          <div className="flex flex-col w-[30%] bg-[#F5F5F5] rounded-3xl px-7 gap-3 pb-20 pt-10">
            <img src={car} className="w-[80px]" />
            <h1 className="font-bold text-[20px]">From Manila via SLEX – Tagaytay City</h1>
            <h1>
              This directions will lead you to the eastern part of Batangas.
            </h1>
            {histories[0].starToll.map((star) => (
              <div className="flex px-5 items-center">
                <div className="w-[10%]">
                  <img src={pin} className="w-[15px] h-[30px]" />
                </div>
                <h1 className="w-[90%]">{star}</h1>
              </div>
            ))}
          </div>
          <div className="flex flex-col w-[30%] bg-[#F5F5F5] rounded-3xl px-7 gap-3 pb-20 pt-10">
          <img src={car1} className="w-[80px]" />
            <h1 className="font-bold text-[20px]">From Manila via SLEX – Tagaytay City</h1>
            <h1>
            If you wish to go to the other side of the province where some of the other beaches are located, below is your road guide.
            </h1>
            {histories[0].slex.map((slx) => (
              <div className="flex  px-5 items-center">
                <div className="w-[10%]">
                  <img src={pin} className="w-[15px] h-[30px]" />
                </div>
                <h1 className="w-[90%]">{slx}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Visit;
