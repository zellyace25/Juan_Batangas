import React from "react";

function ContactUs({ icon, info }) {
  return (
    <div className="flex gap-2 items-center cursor-pointer">
      <img className="py-3" src={icon} />
      <h1 className="text-white text-sm w-3/4 py-[6px]">{info}</h1>
    </div>
  );
}

export default ContactUs;
