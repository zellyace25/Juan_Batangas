import { React } from "react";
import resources from "/src/Resources.js";
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import yellow from "/src/assets/bg-yellow.png";

import TextGradientAnimation from "../../components/TextGradientAnimation";
import Slider from "../../components/Slider";

function Section1() {
  return (
    <div className="flex items-center h-[450px] relative overflow-hidden w-full bg-[#F5F5F5]">
      <img className="absolute right-0 -top-5 h-[450px]" src={yellow} />
      {/* first column */}
      <div className="flex flex-col justify-center items-center w-1/2 text-center p-10 gap-5">
        <div className="flex gap-3 justify-center w-full">
          <h1 className="text-[36px] font-semibold text-[#4D4D4D] font-inter">
            About us
          </h1>
          <h1 className="text-[#830600] text-[36px] font-semibold font-inter">
            Batangas!
          </h1>
        </div>

        {/* swiper for text animation */}
        <div className="w-full h-[80px] flex justify-center">
          <Swiper
            freeMode={true}
            direction="vertical"
            effect="coverflow"
            loop={true}
            autoplay={{ delay: 2000 }}
            modules={[FreeMode, Autoplay]}
            className="max-w-[90%] lg:max-[80%]  "
          >
            {resources[0].textGradients.map((textGradient, i) => (
              <SwiperSlide
                key={i}
                className="flex justify-center items-center "
              >
                <TextGradientAnimation textGradient={textGradient} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div className="overflow-hidden w-full h-20 ">
          {resources[0].textGradients.map((textGradient, i) => (
            <TextGradientAnimation
              key={i}
              textGradient={textGradient}
              delay={i * 2000}
            />
          ))}
        </div> */}

        <p className="text-sm px-20">
          Discover the fascinating world of the Province of Batangas, where a
          rich cultural heritage, stunning landscapes, and a welcoming community
          await you.
        </p>
      </div>
      {/* second column */}
      <div className="w-1/2 flex justify-center">
        <Swiper
          freeMode={true}
          effect="coverflow"
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[FreeMode, Pagination, Navigation, Autoplay]}
          className="max-w-[90%] lg:max-[80%]  "
        >
          {resources[0].carousels.map((carousel, i) => (
            <SwiperSlide
              key={i}
              className="flex justify-center items-center p-10"
            >
              <Slider carousel={carousel} />
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev"></div>

          <div className="swiper-button-next "></div>
        </Swiper>
      </div>
    </div>
  );
}

export default Section1;
