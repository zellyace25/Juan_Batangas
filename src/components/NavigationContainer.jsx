import React from "react";

function NavigationContainer({ navigationOption }) {
  return (
    <div className="text-[#455154] font-poppins flex justify-center hover:bg-[#D12B2B] rounded-[30px] py-[5px] px-[20px] hover:text-[#F5F5F5]  cursor-pointer">
      {navigationOption}
    </div>
  );
}

export default NavigationContainer;
