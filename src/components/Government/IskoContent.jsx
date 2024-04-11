import React from "react";

function IskoContent() {
  return (
    <>
      <div className="w-[70%] h-[90%] self-center bg-red-300 flex">
        {/* 3Ws */}
        <div className="w-[20%] border-l-2 border-black border-solid flex flex-col items-center">
          <div className="h-[33.3%] flex items-center">What?</div>
          <div className="h-[33.3%] flex items-center">Who?</div>
          <div className="h-[33.3%] flex items-center">How?</div>
        </div>
        {/* Content */}
        <div className="w-[35%] border-l-2 border-black border-solid flex flex-col items-center">
          <div className="h-[33.3%] flex items-center">What?</div>
          <div className="h-[33.3%] flex items-center">Who?</div>
          <div className="h-[33.3%] flex items-center">How?</div>
        </div>
        {/* requirements */}
        <div className="w-[45%] border-l-2 border-black border-solid"></div>
      </div>
    </>
  );
}

export default IskoContent;
