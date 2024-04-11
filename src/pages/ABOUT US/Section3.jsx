import React from "react";
import HistoryContent from "../../components/HistoryContent";
import arrow from "/src/assets/arrow.png";

function Section3() {
  return (
    <div className="flex flex-col items-center px-80 gap-1 w-full bg-[#F5F5F5]">
      <h1 className="text-[#FCA311] self-start text-[40px] font-bold">
        History
      </h1>
      <div className="h-[7px] w-[70px] self-start bg-[#FDC221] mb-5"></div>

      <div className="flex flex-col gap-5">
        <HistoryContent
          content={
            "Before the arrival of the Spanish colonizers in the 16th century, Batangas was already inhabited by native tribes such as the Tagalogs and Pampangos. These tribes engaged in trade with neighboring regions and developed their own cultures and societies."
          }
        />
        <HistoryContent
          content={
            " The Spanish arrived in Batangas in the late 16th century, led by Martin de Goiti and Juan de Salcedo. They encountered resistance from local chieftains, but eventually established control over the area. During the Spanish colonial period, Batangas became a part of the vast encomienda system, with large estates owned by Spanish landlords."
          }
        />
        <HistoryContent
          content={
            "Batangas played a significant role in the Philippine Revolution against Spanish rule. Leaders such as Apolinario Mabini and Miguel Malvar hailed from Batangas and led revolutionary movements against the colonial authorities. The province was also a hotbed of revolutionary activity during the Philippine-American War."
          }
        />
      </div>
      <div className="flex gap-5 items-center w-full justify-end my-5">
        <img className="w-[200px]" src={arrow} />
        <h1 className="text-[#830600] font-poppins font-medium text-[16px] cursor-pointer">
          READ MORE
        </h1>
      </div>
    </div>
  );
}

export default Section3;
