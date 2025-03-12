"use client";
import AnimatedHeading from "@/components/common/Heading";
import OurPartnersLogoSlider from "@/components/common/ourPartnersLogoSlider";
import ContactForm from "@/components/contact-us/ContactForm";
import NewsAndNotifications from "@/components/landing-page/NewsAndNotifications";
import CoursesList from "@/components/landing-page/ourCourses";
import OurTeam from "@/components/landing-page/ourTeam";
import Testimonials from "@/components/landing-page/Testimonials";
import { industryPartnersImages } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute z-20 right-4 top-1/2 transform -translate-y-1/2 cursor-pointer bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
      style={{ ...style }}
      onClick={onClick}
    >
      <ChevronRight className="w-6 h-6 text-gray-700" />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute z-20 left-4 top-1/2 transform -translate-y-1/2 cursor-pointer bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
      style={{ ...style }}
      onClick={onClick}
    >
      <ChevronLeft className="w-6 h-6 text-gray-700" />
    </div>
  );
}

// Import slick-carousel CSS (very important!)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  // Carousel image data
  const heroImages = [
    {
      url: "/images/banners/tripura1.png",
      heading: "Our Initiative towards Skill India",
    },
    {
      url: "/images/banners/tripura2.png",
      heading: "Empowering Youth Through Education",
    },
    {
      url: "/images/banners/tripura3.png",
      heading: "Building a Skilled Future for India",
    },
  ];

  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
  };

  return (
    <>
      {/* -------------- Hero Carousel Section -------------------------- */}
      <section className="relative overflow-hidden max-h-screen">
        <Slider
          {...{
            ...carouselSettings,
            arrows: true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
          }}
        >
          {heroImages.map((slide, index) => (
  <div key={index} className="relative h-[30vh] sm:h-[40vh] md:h-[80vh] w-full">
    <Image
      src={slide.url}
      alt={`Hero Image ${index + 1}`}
      fill={true}
      className="object-cover rounded-none"
      priority={index === 0}
    />
    <div className="absolute inset-0 bg-black/40 z-10 flex items-end justify-center pb-10 sm:pb-14 md:pb-32">
      <motion.h1
        className="text-white text-lg sm:text-2xl md:text-5xl font-bold text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {slide.heading}
      </motion.h1>
    </div>
  </div>
))}


        </Slider>
      </section>

      {/* --------------------- Section 2 --------------------- */}
      <section className="bg-white text-gray-700 body-font overflow-hidden px-4 md:px-8 text-justify">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font lg:w-1/3 lg:mb-0 mb-4" style={{ color: '#60060F' }}>
              Carving the Future of India
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              We focus on enhancing the skills of every individual, empowering
              them with the tools, knowledge, and opportunities needed to excel
              in their chosen fields. By fostering growth, creativity, and
              innovation, we aim to unlock their full potential and enable them
              to contribute meaningfully to a brighter, more prosperous, and
              inclusive future.
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <motion.div
                key={index}
                className={`md:p-2 p-1 w-1/2 md:w-1/3 ${index === 2 || index === 3 ? "w-full" : ""
                  }`}
                initial={{
                  opacity: 0,
                  y: index > 3 ? 100 : 0,
                  x: index % 2 === 0 ? 100 : -100,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  width={500}
                  height={300}
                  alt={`gallery ${index}`}
                  className="w-full object-cover h-full object-center block rounded-lg"
                  src={`/gallery${index}.jpg`}
                  loading="lazy"
                  style={{ aspectRatio: "5/3" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- industry logo slider --------------- */}
      <section className="px-4 md:px-8" style={{ backgroundColor: '#60060F' }}>
        <OurPartnersLogoSlider
          title={"Industry Partners"}
          images={industryPartnersImages}
        />
      </section>

      {/* About Section */}
      <section className="text-gray-700 bg-white body-font px-4 md:px-8 text-justify">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 relative">
            <motion.img
              src="gallery7.jpg"
              alt="About Image"
              className="object-cover object-center w-full h-64 md:h-96 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 z-10"></div>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-12">
            <AnimatedHeading text="About Us" variant="fadeUp" />
            <p className="leading-relaxed text-lg mb-6">
              We are a passionate team committed to bringing innovative
              solutions and services. Our goal is to create an impactful user
              experience and build products that improve lives.
            </p>
            <p className="leading-relaxed text-lg mb-6">
              Our journey started with a vision to revolutionize the industry,
              and through hard work and dedication, we’ve been able to make it a
              reality. We believe in delivering excellence and continuously
              improving our services to meet the needs of our users.
            </p>
            <motion.a
              href="/about-us"
              className="text-green-700 inline-flex items-center mt-4 hover:text-green-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="text-gray-700 body-font py-14 px-4  md:px-8" style={{ backgroundColor: '#60060F' }}>
        <CoursesList />
      </section>

      {/* News and Notifications */}
      <section className="bg-white py-10 px-4 md:px-8" id="news">
        <NewsAndNotifications />
      </section>

      {/* Testimonials */}
      <section className="py-10 px-4 md:px-8 " id="testimonial" style={{ backgroundColor: '#60060F' }}>
        <Testimonials />
      </section>

      {/* Our Team */}
      <section className="px-4 md:px-8 py-20">
        <OurTeam />
      </section>

      {/* Contact Us */}
      <section className="py-10 px-4 md:px-8" style={{ backgroundColor: '#60060F' }}>
        <AnimatedHeading text="Contact Us" variant="fadeDown" className="container mx-auto" />
        <div className="container mx-auto flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2 my-auto">
            <motion.img
              src="/images/contact-us.png"
              alt="About Image"
              className="object-center w-full h-96"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="w-full md:w-1/2">
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
