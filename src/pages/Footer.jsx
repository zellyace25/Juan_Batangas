import React from "react";
import logo from "/src/assets/LOGO1.svg";
import resources from "/src/Resources.js";
import TextFooter from "../components/TextFooter";
import GovermentLinks from "../components/GovermentLinks";
import ContactUs from "../components/ContactUs";

function Footer() {
  return (
    <div className="flex w-screen h-auto bg-[#B00A0A] px-28 py-10 gap-10">
      {/* first colum */}
      <div className="flex flex-col gap-10 w-[33.33%]">
        <div className="flex items-center gap-3">
          <img className="h-[40px]" src={logo} />
          <h1 className="text-white font-poppins font-[700] text-xl w-[120px]">
            Province of Batangas
          </h1>
        </div>
        <div>
          <TextFooter text={"Copyright © 2024 Province of Batangas."} />
          <TextFooter text={"All rights reserved"} />
        </div>
        <div className="flex gap-3">
          {resources[0].socialIcons.map((icon, i) => (
            <img className="cursor-pointer" src={icon} key={i} />
          ))}
        </div>
      </div>

      {/* second column */}
      <div className="w-[33.33%]">
        <h1 className="text-white font-bold text-lg mb-3">Government Links</h1>
        {resources[0].governmentLinks.map((links, i) => (
          <GovermentLinks links={links} key={i} />
        ))}
      </div>

      {/* third column */}
      <div className="w-[33.33%]">
        <h1 className="text-white font-bold text-lg mb-3">Contact Us</h1>
        <div className="flex items-center">
          <div className="flex flex-col justify-center">
            {resources[0].contactIcons.map((icon, i) => (
              <ContactUs icon={icon} key={i} />
            ))}
          </div>
          <div className="flex flex-col justify-center">
            {resources[0].contactInfos.map((info, i) => (
              <ContactUs info={info} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
