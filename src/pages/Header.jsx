import React from "react";
import logo from "/src/assets/LOGO.svg";
import NavigationContainer from "../components/NavigationContainer";
import resources from "/src/Resources.js";

function Header() {
  return (
    <div className="flex items-center w-full h-[90px] bg-[#F5F5F5] p-3 justify-between">
      <div className="flex items-center gap-3">
        <img className="h-[45px]" src={logo} />
        <h1 className="text-[#C21616] font-poppins font-[700] text-xl w-[120px]">
          Province of Batangas
        </h1>
      </div>

      <div className="flex gap-7 items-center">
        {resources[0].navigationBar.map((navigationOption, i) => (
          <NavigationContainer navigationOption={navigationOption} key={i} />
        ))}

        <div className="bg-[#C21616] rounded-full p-3 h-10 w-10 cursor-pointer mr-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              fill="#ffffff"
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Header;