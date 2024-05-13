import React from "react";
import {
  batangasProvince,
  batangasCity,
  alitagtag,
  calaca,
  balayan,
  elbg,
} from "/src/Images.js";
import ImageCard from "../../components/ImageCard";
import fiesta from "../../Fiestas";

function Experience() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#830600] text-white  relative h-[400px] justify-center overflow-hidden gap-16">
        <div className="flex gap-8 items-center font-bold">
          <h1 className="text-[90px]">Fiestas</h1>
          <h1 className="text-[35px]">and</h1>
          <h1 className="text-[90px]">Festivals</h1>
        </div>
        <h1 className="gradient-bg py-5 px-20 rounded-full text-[20px]">
          Average of 30 festivals held every year initiated by municipaities and
          cities
        </h1>
        <img src={elbg} className="absolute h-[450px] left-0" />
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-10 items-center">
          <div className="h-[7px] w-[100px] bg-[#830600] rounded-full"></div>
          <h1 className="gradient-text font-bold text-[70px] py-10">TOP 5</h1>
          <div className="h-[7px] w-[100px] bg-[#830600] rounded-full"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-12">
          <ImageCard
            image={balayan}
            location="Balayan"
            fiesta="Parada ng Lechon"
            details="The Parada ng Lechon in Balayan, Batangas, celebrated every June 24, is a lively and savory festival that honors St. John the Baptist while showcasing the region's culinary tradition of roasted pig (lechon)."
          />
          <ImageCard
            image={calaca}
            location="Calaca"
            fiesta="Calatchara Festival"
            details={`The Calacatchara Festival, celebrated in October in Calaca, Batangas, cleverly blends the town's name, "Calaca," with "atchara," paying homage to its renowned product. Atchara, a zesty appetizer or side dish made from pickled raw papaya.`}
          />
          <ImageCard
            image={alitagtag}
            location="Alitagtag"
            fiesta="Tapusan Festival"
            details="Alitagtag's May Flower Festival on May 31 is a century-old tradition, symbolizing profound devotion to Mother Mary and the Holy Cross, with each barangay actively involved in preparations and presentations for both locals and tourists."
          />
          <ImageCard
            image={batangasCity}
            location="Batangas City"
            fiesta="Sublian Festival"
            details="The Sublian celebration, spanning fourteen days and concluding on July 23 each year, is a gratitude-filled harvest festival in Batangas, honoring the town's benefactors: The Holy Cross in Bauan and Agoncillo, and the Sto. Niño in Batangas City."
          />
          <ImageCard
            image={batangasProvince}
            location="Batangas Province"
            fiesta="Ala eh! Festival"
            details="The Ala-Eh Festival, celebrated on December 8 to mark Batangas Province's founding, is renowned as the region's most vibrant celebration. Its name, derived from Batangan Tagalog reflecting the welcoming spirit of the Batangueños."
          />
        </div>
      </div>

      <div className="bg-[#E7AC1040] py-10 pl-24 pr-5 flex gap-10 flex-col justify-center items-center rounded-tr-2xl rounded-tl-2xl mt-10">
        <div className="flex w-full">
          <div className="w-[33.33%]">
            <h1 className="text-[#830600] font-semibold text-[34px]">
              FEBRUARY TO APRIL
            </h1>
            {fiesta[0].february.map((feb) => (
              <p className="text-[#060606]">{feb}</p>
            ))}
          </div>
          <div className="w-[33.33%]">
            <h1 className="text-[#830600] font-semibold text-[34px]">JUNE</h1>
            {fiesta[0].june.map((feb) => (
              <p className="text-[#060606]">{feb}</p>
            ))}
          </div>
          <div className="w-[33.33%]">
            <h1 className="text-[#830600] font-semibold text-[34px]">
              SEPTEMBER
            </h1>
            {fiesta[0].september.map((feb) => (
              <p className="text-[#060606]">{feb}</p>
            ))}
          </div>
        </div>
        <div className="flex w-full">
          <div className="w-[33.33%]">
            <h1 className="text-[#830600] font-semibold text-[34px]">MAY</h1>
            {fiesta[0].may.map((feb) => (
              <p className="text-[#060606]">{feb}</p>
            ))}
          </div>
          <div className="w-[33.33%]">
            <h1 className="text-[#830600] font-semibold text-[34px]">JULY</h1>
            {fiesta[0].july.map((feb) => (
              <p className="text-[#060606]">{feb}</p>
            ))}
            <h1 className="text-[#830600] font-semibold text-[34px] mt-10">AUGUST</h1>
            {fiesta[0].august.map((feb) => (
              <p className="text-[#060606]">{feb}</p>
            ))}
          </div>
          <div className="w-[33.33%]">
            <h1 className="text-[#830600] font-semibold text-[34px]">
              OCTOBER
            </h1>
            {fiesta[0].october.map((feb) => (
              <p className="text-[#060606]">{feb}</p>
            ))}
            <h1 className="text-[#830600] mt-5 font-semibold text-[34px]">
              DECEMBER
            </h1>
            {fiesta[0].december.map((feb) => (
              <p className="text-[#060606]">{feb}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="h-10 w-full gradient-bg"></div>
    </>
  );
}

export default Experience;
