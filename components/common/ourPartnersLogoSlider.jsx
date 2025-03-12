"use client";

import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";
import AnimatedHeading from "./Heading";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const OurPartnersLogoSlider = ({ images, title }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4, slidesToScroll: 1 },
      },
      {
        breakpoint: 700,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 500,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <motion.div
      className="mx-auto container"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      {title && <AnimatedHeading text={title} variant="fadeDown" />}
      <div className="py-4">
        <Slider {...settings}>
          {images?.map((item, index) => (
            <motion.div
              key={index}
              className="flex justify-center items-center h-full"
              whileHover={{ scale: 1.1 }} // Slight hover effect
            >
              {item?.imgSrc && (
                <Image
                  src={item?.imgSrc}
                  alt={`Partner ${index + 1}`}
                  width={116}
                  height={50}
                  className="bg-white h-32 w-52 p-3 rounded-xl"
                />
              )}
            </motion.div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default OurPartnersLogoSlider;
