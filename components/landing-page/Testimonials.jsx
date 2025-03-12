"use client";
import Slider from "react-slick";
import Image from "next/image";
import { testimonialData } from "@/data/testinomialsData";
import AnimatedHeading from "../common/Heading";

const settings = {
  dots: true,
  dotsClass: "slick-dots",
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  autoplay: true,
  speed: 800,
  autoplaySpeed: 3000,
  cssEase: "ease-in-out",
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 800, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

const Testimonials = () => {
  return (
    <div className="mx-auto container py-10">
      <AnimatedHeading text="Testinomials" variant="fadeDown" className=" text-4xl font-bold" />

      <Slider {...settings} className="mt-8">
        {testimonialData?.map((item, i) => (
          <div key={i} className="px-4">
            <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 relative 
            transition-transform duration-300 hover:scale-105 flex flex-col justify-between h-full min-h-[320px]">
              
              {/* Profile Section */}
              <div className="flex flex-col items-center">
                <Image
                  src={item.imgSrc}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-full border-4 shadow-md"
                  style={{ borderColor: '#60060F' }}
                />
                <h3 className="text-lg font-semibold text-gray-800 mt-3">{item.name}</h3>
                <h4 className="text-sm text-gray-500">{item.profession}</h4>
              </div>

              {/* Comment Section */}
              <p className="text-gray-600 mt-4 text-center italic flex-grow">
                "{item.comment}"
              </p>

              {/* Decorative Quote */}
              <div className="absolute top-3 right-3 text-4xl text-green-300 opacity-20">
                ❝
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
