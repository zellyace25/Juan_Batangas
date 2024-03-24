import React from "react";
import {
  FreeMode,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import bgPaper from "/src/assets/bg-paper.png";
import categories from "/src/ProgramsAndServices.js";
import CarouselPrograms from "../components/CarouselPrograms";
import vidclip from "/src/assets/Videos/BatangasCity.mp4";

function Home() {
  return (
    <div className="bg-[#F5F5F5] w-full h-full flex flex-col gap-10">
      {/* title div */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[#4D4D4D] font-semibold text-[30px]">wowowoowow</h1>
        <h1 className="gradient-text text-[60px] font-bold ">Programs</h1>
        <p className="text-[717171] text-sm font-inter">
          Your Gateway to Community Programs and Scholarships!
        </p>
      </div>

      {/* paper background--content */}
      <div className="relative flex flex-col gap-5 p-13 text-white h-[800px] w-full group overflow-hidden justify-center  ">
        <div
          className="absolute inset-0 bg-center bg-contain"
          style={{ backgroundImage: `url(${bgPaper})` }}
        />
        <div className="absolute w-full h-full p-20 flex flex-col justify-center items-center gap-10">
          <h1 className="text-white text-[30px]">Programs And Services:</h1>

          {/* caoursel */}
          <div className="w-full  items-center flex justify-center">
            <Swiper
              freeMode={true}
              slidesPerView={"auto"}
              spaceBetween={50}
              effect="coverflow"
              centeredSlides={true}
              loop={true}
              pagination={{ clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 200,
                scale: 1,
              }}
              modules={[FreeMode, Pagination, Navigation, EffectCoverflow]}
              className="w-full flex justify-center"
            >
              {categories.map((category, i) => (
                <SwiperSlide
                  key={i}
                  className=" h-[350px] w-[350px] bg-opacity-10 flex justify-center items-center mb-20 rounded-2xl"
                >
                  <CarouselPrograms
                    icon={category.icons}
                    program={category.programs}
                    detail={category.details}
                  />
                </SwiperSlide>
              ))}
              <div className="swiper-button-prev text-white"></div>

              <div className="swiper-button-next text-white"></div>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full h-[400px] items-center">
        <div className="w-1/2 px-20">
          <div className="gradient-bg h-1 w-16"></div>
          <h1 className="text-[36px]">Announcement</h1>
          <h1 className="font-semibold text-[36px]">wowowoowow</h1>
          <p>
            Lorem ipsum dolor sit amet. Ab repellendus similique ea molestiae
            dignissimos vel iste molestiae est unde laboriosam et dolorem
            molestiae ab explicabo tempore. Lorem ipsum dolor sit amet. Ab
            repellendus similique ea molestiae dignissimos vel iste molestiae
            est unde laboriosam et dolorem molestiae ab explicabo tempore. 
          </p>
        </div>
        <div className="w-1/2 h- px-20">
          <video
            className="rounded-3xl w-[90%]"
            typeof="video/mp4"
            controls
            src={vidclip}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
