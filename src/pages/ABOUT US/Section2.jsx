import React from "react";
import VisionMission from "../../components/VisionMission";

function Section2() {
  return (
    <div className="w-full bg-[#F5F5F5]">
      <div className="w-[400px] h-[400px] border-dotted border-2 border-slate-500 -bottom-2/4 right-52 rounded-full absolute"></div>

      <div className="h-[550px] w-[100%] relative overflow-hidden">
        {/* dotted circle */}
        {/* <img
          className="absolute right-0 -bottom-[30px] h-[600px]"
          src={ellipse}
        /> */}
        <div className="bg-[#830600] w-[70%] h-[450px] rounded-tr-[500px] p-16">
          <h1 className="text-white font-poppins font-bold text-[48px]">
            CITIZEN'S CHARTER
          </h1>
          <h1 className="text-[#FDC221] font-medium font-poppins text-[28px]">
            VISION AND MISSION
          </h1>
        </div>
        <div className="flex gap-28 absolute bottom-[50px] w-[73%] justify-end">
          <VisionMission
            title={"Vision"}
            content={
              "RICH Batangas : A home of God- Centered noble, self-reliant, and resilient Batangueños; that provides oppurtunities and empowers its people to achieve their full portentials, high aspirations, and ideals."
            }
          />
          <VisionMission
            title={"Mission"}
            content={
              "To deliver public service that is inclusive- accessible to and concerned for all; with integrity, sincerity, and honesty; while creating a work environment with resilient, capable, compassionate, and relentless public servants empowering the Batangueños."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Section2;
