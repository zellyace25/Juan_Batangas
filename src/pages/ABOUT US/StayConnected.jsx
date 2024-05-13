import React from "react";
import { ellipse, rectangle, Website, Tweeter, Facebook } from "/src/Images.js";
import resources from "../../Resources";
import SocialContainer from "../../components/SocialContainer";

function StayConnected() {
  return (
    <div className="bg-[#F5F5F7]">
      <div className="w-full h-[600px] relative py-14 px-28 gap-12 flex flex-col border-b-8 border-solid border-[#830600] overflow-hidden">
        <img src={rectangle} className="h-[600px] absolute right-0 top-0" />
        <h1 className="text-[80px] gradient-text font-bold">BATANGAS</h1>
        <p className="text-[#830600] text-[20px] w-[300px]">
          {" "}
          is a first class province of the Philippines located on the
          southwestern part of Luzon in the CALABARZON region
        </p>
        <div className="text-[#830600] bg-[#E7AC10] rounded-full p-3 w-[200px] flex justify-center">
          Learn more below
        </div>
      </div>

      <div className="flex flex-col py-10 px-20 gap-10 relative">
        <div className="flex flex-col self-end items-end w-[500px]">
          <img src={ellipse} className="absolute h-[200px] top-0 left-0" />
          <h1 className="text-[#830600] font-bold text-[50px] shadow-text-yellow">
            CULTURE
          </h1>
          <p className="text-[#E7AC10] font-semibold text-[20px] ">
            Batangas City's culture embodies strong traditions community
            bonds,and pride, rooted in agriculture and fishing. Family
            gatherings, rich cuisine, and festive celebrations are central,
            reflecting the city's heritage and identity.
          </p>
        </div>

        <div className="flex justify-center gap-2">
          {resources[0].culture.map((cultures) => (
            <img src={cultures} className="h-[500px]" />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <div className="h-[36px] w-[200px] gradient-bg rounded-tr-xl rounded-br-xl"></div>
          <h1 className="text-[#830600] text-[60px] font-semibold">
            Stay Connected
          </h1>
          <div className="h-[36px] w-[200px] gradient-bg rounded-tl-xl rounded-bl-xl"></div>
        </div>
        <div className="flex justify-center gap-5 mb-16">
          <SocialContainer social="Website" icon={Website} socialName="Batangas Gov Portal"/>
          <SocialContainer social="Facebook" icon={Facebook} socialName="Batangas PIO"/>
          <SocialContainer social="Tweeter" icon={Tweeter} socialName="Batangas PIO Capitol"/>
        </div>
      </div>
    </div>
  );
}

export default StayConnected;
