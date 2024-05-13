import React from "react";
import {
  bgSection1,
  etymology,
  barrier,
  prehistory1,
  prehistory2,
  prehistory3,
  spanish1,
  spanish2,
  spanish3,
  american1,
  japanese1,
  postAmerican1,
  recent1,
  recent2,
  recent3,
  line,
} from "/src/Images.js";
import histories from "../../HistoryInfos";
function History() {
  return (
    <div className="bg-[#F5F5F5]">
      {/* first section */}
      <div className=" overflow-hidden">
        <div className="flex relative">
          <div className="w-[50%] p-20 flex flex-col gap-5 x">
            <h1 className="text-[#830600] text-[100px] font-bold">History</h1>
            <h1>
              Batangas, with Batangas City as its capital, is surrounded by
              Cavite and Laguna to the north, Quezon to the east, and the South
              China Sea to the west. Known for its beaches and diving spots like
              Anilao, it's a popular tourist destination near Metro Manila.{" "}
            </h1>
            <h1>
              Home to Taal Volcano and the Taal Heritage Town, Batangas also
              features the second-largest international seaport in the
              Philippines and serves as a focal point for industrial growth in
              the CALABARZON region.
            </h1>
          </div>
          <div className="w-[50%] flex justify-end relative ">
            <img src={bgSection1} className="w-[650px] -top-16" />
          </div>
        </div>
        {/* second section */}
        <div className="bg-[#830600] flex w-[95%] z-10 absolute -bottom-[430px] ">
          <div className="w-[50%] flex justify-center relative">
            <img src={etymology} className="w-[430px] absolute -top-20" />
          </div>
          <div className="w-[50%] flex flex-col gap-5 text-white py-10 pr-10 ">
            <h1 className="text-[50px]">Etymology</h1>
            <h1>
              The first recorded name of the Province was Kumintang, after the
              Datu who inherited the dominion from Datu Balensusa. Its centre,
              the present day Balayan, was the most progressive town of the
              Province and the traditional centre of governance. Later, as the
              eruption of the Taal Volcano destroyed a significant portion of
              the town, the provincial centre was transferred to Taal, which was
              then called Bonbon and the name of the province was changed after
              that of the town.
            </h1>
            <h1>
              The term batangan means a raft, the people used so that they could
              fish in the nearby Taal Lake. It also meant the
              numerous logs found in the Calumpang River, the body of water that
              runs through the northeastern portion of the town and assumes the
              shape of a tuning fork.
            </h1>
          </div>
        </div>
      </div>

      {/* third section */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center my-20">
          <img src={line} />
          <h1 className="font-bold text-[#830600] text-[60px]">Timeline</h1>
        </div>
        {/* first column */}
        <div className="px-10 flex gap-3">
          <div className="w-[45%] flex flex-col gap-2">
            <div className="w-full flex flex-col gap-3 text-[13px] p-5 text-justify bg-[#830600] bg-opacity-10 rounded-lg justify-center h-fit">
              {histories[0].prehistory.map((pre) => (
                <h1>{pre}</h1>
              ))}
            </div>

            {/* spanish */}
            <div className="relative h-[1100px] w-full flex items-center">
              <img src={spanish1} className="w-[280px] absolute top-5" />
              <img
                src={spanish2}
                className="w-[280px] top-[200px] absolute right-0"
              />
              <img
                src={spanish3}
                className="w-[280px] absolute bottom-5 left-24"
              />
              <h1 className="w-[70%] font-bold text-[#830600] text-[60px] pl-10 pt-10">
                Spanish Colonization
              </h1>
            </div>

            {/* american */}
            <div className="w-full flex flex-col gap-3 text-[13px] p-5 text-justify bg-[#830600] bg-opacity-10 rounded-lg justify-center h-fit">
              {histories[0].american.map((ame) => (
                <h1>{ame}</h1>
              ))}
            </div>
            {/* japanese */}
            <div className="relative h-[450px] w-full flex items-end mt-5 mb-10">
              <img
                src={japanese1}
                className="w-[250px] top-[20px] absolute right-0"
              />
              <h1 className="w-[70%] pl-5 text-center font-bold text-[#830600] text-[60px]">
                Japanese Period
              </h1>
            </div>
            {/* postAmerican */}
            <div className="w-full flex flex-col gap-3 text-[13px] p-5 text-justify bg-[#830600] bg-opacity-10 rounded-lg justify-center h-fit">
              {histories[0].postAmerican.map((post) => (
                <h1>{post}</h1>
              ))}
            </div>
            {/* recent */}
            <div className="relative h-[825px] w-full flex overflow-hidden">
              <img src={recent1} className="w-[300px] absolute top-5"/>
              <img src={recent2} className="w-[300px] bottom-28 absolute right-0"/>
              <img src={recent3} className="w-[300px] absolute -bottom-56 "/>
              <h1 className="w-full text-center font-bold text-[#830600] text-[60px] pl-56 pt-20">Recent</h1>
            </div>
          </div>
          <div className="w-[10%] flex justify-center mb-10">
            <img src={barrier} className="" />
          </div>
          {/* second column  */}
          <div className="w-[45%] flex flex-col justify-start">
            {/* prehistory  */}
            <div className="relative h-[1100px] w-full flex items-center">
              <img src={prehistory1} className="w-[320px] absolute top-5" />
              <img
                src={prehistory2}
                className="w-[170px] top-[200px] absolute right-0"
              />
              <img
                src={prehistory3}
                className="w-[320px] absolute bottom-5 left-24"
              />
              <h1 className="w-full text-center font-bold text-[#830600] text-[60px] ">
                Prehistory
              </h1>
            </div>
            {/* spanish  */}
            <div className="w-full flex flex-col gap-3 text-[13px] p-5 text-justify bg-[#830600] bg-opacity-10 rounded-lg justify-center h-fit">
              {histories[0].spanish.map((span) => (
                <h1>{span}</h1>
              ))}
            </div>

            {/* american  */}
            <div className="relative h-[400px] w-full flex items-center">
              <img
                src={american1}
                className="w-[250px] top-[20px] absolute right-0"
              />
              <h1 className="w-[70%] pl-5 text-center font-bold text-[#830600] text-[60px]">
                American Period
              </h1>
            </div>
            {/* japanese */}
            <div className="w-full flex flex-col gap-3 text-[13px] p-5 text-justify bg-[#830600] bg-opacity-10 rounded-lg justify-center h-fit mt-10">
              {histories[0].japanese.map((jap) => (
                <h1>{jap}</h1>
              ))}
            </div>
            {/* postAmerican */}
            <div className="relative h-[500px] w-full flex  mt-14 justify-end ">
              <img
                src={postAmerican1}
                className="w-[300px] absolute top-10 flex left-0"
              />
              <h1 className="w-[50%] flex text-center font-bold text-[#830600] text-[60px]">
                Post- American Period
              </h1>
            </div>
            {/* recent */}
            <div className="w-full flex flex-col gap-3 text-[13px] p-5 text-justify bg-[#830600] bg-opacity-10 rounded-lg justify-center h-fit">
              {histories[0].recent.map((rec) => (
                <h1>{rec}</h1>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
