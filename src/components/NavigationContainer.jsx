import React from "react";

function NavigationContainer({ navigationOption, handleClick }) {
  return (
    <div
      className="relative text-[#455154] font-poppins flex justify-center hover:bg-[#D12B2B] rounded-[30px] py-[5px] px-[15px] hover:text-[#F5F5F5]  cursor-pointer"
      onClick={handleClick}
    >
      {navigationOption}
    </div>
  );
}

export default NavigationContainer;
