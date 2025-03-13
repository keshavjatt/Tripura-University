"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";
import { ourTeamData } from "@/data/ourTeamData";
import AnimatedHeading from "../common/Heading";

const OurTeam = () => {
  return (
    <div className="container mx-auto">
      <AnimatedHeading text="Our Team" variant="fadeUp" className="text-[#60060F]" />
      <div className=" mx-auto pt-3 ">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            480: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 4 },
          }}
          navigation
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          className=""
        >
          {ourTeamData?.map((member, index) => (
            <SwiperSlide key={index}>
              <div
                className="shadow-lg rounded-xl p-4 text-center hover:cursor-pointer transition duration-300 hover:scale-105 flex flex-col justify-between h-[300px]"
                style={{ backgroundColor: "#60060F" }}
              >
                <div className="w-full h-48">
                  <Image
                    src={member?.image}
                    alt={member?.name}
                    width={100}
                    height={100}
                    objectFit="cover"
                    className="w-full h-full rounded-md"
                  />
                </div>

                <div className="py-4">
                  <h3 className="text-md text-white font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-white text-sm">{member.designation}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Inline CSS to change navigation color to white */}
        <style jsx global>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: white !important;
          }
        `}</style>
      </div>
    </div>
  );
};

export default OurTeam;
