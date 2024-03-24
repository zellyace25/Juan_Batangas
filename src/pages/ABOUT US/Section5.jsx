import React from "react";

function Section5() {
  return (
    <div className="flex justify-center flex-col items-center bg-[#F5F5F5] py-10 gap-10">
      <div className="flex justify-center flex-col items-center px-96">
        <div className="h-1 w-16 bg-[#F59E0B]"></div>
        <h1 className="text-[#F59E0B] text-[36px] font-semibold">
          BATANGAS MAP
        </h1>
        <p className="font-semibold text-center text-[16px]">
          Batangas' map invites exploration of its diverse landscapes, rich in
          history, culture, and natural beauty, offering attractions for
          adventurers and culture seekers alike.
        </p>
      </div>
      <div className="flex justify-between gap-5 w-full">
        <div className="bg-[#E7AC10] h-[400px] w-[400px] rounded-tr-xl rounded-br-xl"></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.227775172901!2d121.06165107431612!3d13.765133196986236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd055b7bf4813b%3A0xd5d1cf0279820f6!2sBatangas%20Provincial%20Capitol!5e0!3m2!1sen!2sph!4v1711241910772!5m2!1sen!2sph"
          className="w-[680px] h-[480px]"
        ></iframe>
        <div className="bg-[#E7AC10]  h-[400px] w-[400px] rounded-tl-xl rounded-bl-xl"></div>
      </div>
    </div>
  );
}

export default Section5;
