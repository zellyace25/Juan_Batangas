import React, { useState } from "react";
import Header from "./Header";
import ChoicesContainer from "../components/Government/ChoicesContainer";
import MunicipalityOption from "../components/Government/MunicipalityOption";
import IskoContent from "../components/Government/IskoContent";

function Programs() {
  const [handleDistrict, setHandleDistrict] = useState(false);
  const [district, setDistrict] = useState("");
  const [handleMunicipality, setHandleMunicipality] = useState(false);
  const [municipality, setMunicipality] = useState("");

  return (
    <>
      <Header />
      <div className="w-full h-screen px-[80px] py-[30px] bg-[#F5F5F5]">
        <h1 className="gradient-text font-bold text-[60px]">
          Scholarships Programs
        </h1>
        <div className="h-[500px] w-full gap-16 flex bg-white p-5 rounded-[20px]">
          <div className="w-[30%] flex flex-col gap-2 ">
            <h1>Select District</h1>
            <div
              className="flex w-full items-center border-solid border-2 border-[#ABABB5] px-2 cursor-pointer rounded-sm relative"
              onClick={() => setHandleDistrict(!handleDistrict)}
            >
              <h1>{district ? district : "District"}</h1>
              {handleDistrict ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-[20px] flex absolute right-3"
                >
                  <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-[20px] flex absolute right-3"
                >
                  <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              )}
              {/* hidden container */}
              {handleDistrict && (
                <div className="flex flex-col w-full border-solid border-2 border-[#ABABB5] p-5 rounded-sm absolute top-8 right-0 bg-white z-10 overflow-auto">
                  <ChoicesContainer setDistrict={setDistrict} />
                </div>
              )}
            </div>
            <h1>Select Municipality</h1>
            <div
              className="flex w-full items-center border-solid border-2 border-[#ABABB5] px-2 cursor-pointer rounded-sm relative"
              onClick={() => setHandleMunicipality(!handleMunicipality)}
            >
              <h1>{municipality ? municipality : "Municipality"}</h1>
              {handleMunicipality ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-[20px] flex absolute right-3"
                >
                  <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-[20px] flex absolute right-3"
                >
                  <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              )}
              {/* hidden container */}
              {handleMunicipality && (
                <div className="flex flex-col w-full h-[300px] border-solid border-2 border-[#ABABB5] p-5 rounded-sm absolute top-8 right-0 bg-white z-10 overflow-auto">
                  <MunicipalityOption setMunicipality={setMunicipality} />
                </div>
              )}
            </div>
          </div>
          
          <IskoContent/>
        </div>
      </div>
    </>
  );
}

export default Programs;
