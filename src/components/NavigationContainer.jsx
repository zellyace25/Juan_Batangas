import React from "react";

function NavigationContainer({ navigationOption }) {
  return (
    <div className="text-[#455154] font-poppins hover:bg-[#D12B2B] rounded-[30px] py-[5px] hover:px-[20px] hover:text-[#F5F5F5] mx-5">
      {navigationOption}
    </div>
  );
}

export default NavigationContainer;
