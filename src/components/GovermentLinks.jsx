import React from "react";

function GovermentLinks({ links }) {
  return (
    <ul className="list-disc px-5 py-1 ">
      <li className="text-white text-sm cursor-pointer">{links}</li>
    </ul>
  );
}

export default GovermentLinks;
