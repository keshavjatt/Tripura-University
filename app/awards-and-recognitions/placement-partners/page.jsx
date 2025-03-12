"use client";
import React, { useEffect, useState } from "react";
import { FaBriefcase, FaUserTie, FaGlobe, FaHandshake } from "react-icons/fa";

import { motion } from "framer-motion";
import placementImg from "@/public/images/placement.png";
// import placementImg1 from "@/public/images/partners/self.png";
// import placementImg2 from "@/public/images/partners/capative.png";
// import placementImg3 from "@/public/images/partners/placement.png";
// import placementImg4 from "@/public/images/partners/international.png";

import Image from "next/image";
import OurPartnersLogoSlider from "@/components/common/ourPartnersLogoSlider";
import { placementPartnersImages } from "@/lib/constants";
import PageLinks from "@/components/common/pageLink";

// const data = [
//   { imgSrc: "/images/partners/Placement-partners/Job Fair Photos/gzb.jpeg" },
//   { imgSrc: "/images/partners/Placement-partners/Job Fair Photos/gzb1.jpeg" },
//   { imgSrc: "/images/partners/Placement-partners/Job Fair Photos/gzb2.jpeg" },
//   { imgSrc: "/images/partners/Placement-partners/Job Fair Photos/gzb3.jpeg" },
//   { imgSrc: "/images/partners/Placement-partners/Job Fair Photos/Agra.png" },
// ];

const placementData = [
  {
    id: 1,
    title: "Self-Employment",
    icon: <FaUserTie className="text-4xl text-blue-600" />,
    description:
      "We empower individuals with in-demand skills and financial guidance to achieve self-employment success.",
  },
  {
    id: 2,
    title: "Captives",
    icon: <FaBriefcase className="text-4xl text-green-600" />,
    description:
      "Our graduates seamlessly transition from training to employment within our organization, ensuring a skilled workforce.",
  },
  {
    id: 3,
    title: "Campus Placement & Job Fairs",
    icon: <FaHandshake className="text-4xl text-orange-600" />,
    description:
      "We actively participate in Rozgar Mela and other job fairs to place trained candidates in reputed companies.",
  },
  {
    id: 4,
    title: "International Opportunities",
    icon: <FaGlobe className="text-4xl text-purple-600" />,
    description:
      "Leveraging global programs like TITP, we provide international job placements and skill development opportunities.",
  },
];

const PlacementTieUpsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = ""; // Restore scrolling
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isModalOpen) return;

      switch (event.key) {
        case "ArrowRight":
          nextImage();
          break;
        case "ArrowLeft":
          prevImage();
          break;
        case "Escape":
          closeModal();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <PageLinks
        title="Placement Partners "
        imageUrl="/images/pagelinks/partnership.webp"
        items={[
          { name: "Home", link: "/" },
          {
            name: "Placement Partners",
            link: "/approvals-and-collabrations/placement-tie-ups",
          },
        ]}
      />

      <div className="container mx-auto py-8 px-4   flex flex-col gap-4 text-gray-700 text-justify">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Animated Text Section */}
          <motion.div
            className="content w-full md:w-1/2 flex flex-col gap-3 indent-7"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-600">
              {`
          At Tripura Global Technical University, we go beyond skill development by ensuring our trainees
          have direct access to employment opportunities through strong
          placement tie-ups with reputed organizations. We have established
          partnerships with leading companies across diverse sectors, enabling
          rural youth to secure stable jobs that match their skill sets. Our
          placement collaborations bridge the gap between trained talent and
          industry demand, ensuring that every individual completing our
          programs finds meaningful employment.
          `}
            </p>
            <p>
              {`
          Through dedicated placement initiatives, job fairs, and corporate
          tie-ups, we prioritize empowering individuals—especially those from
          rural and underprivileged backgrounds—to secure stable, well-paying
          jobs. By continuously engaging with industry leaders, we stay ahead of
          evolving market needs, ensuring that our trainees receive up-to-date
          training that enhances their employability.
          `}
            </p>
          </motion.div>

          {/* Animated Image Section */}
          <motion.div
            className="flex justify-center w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={placementImg}
              width={400}
              height={400}
              alt="Our Work"
              className="w-full max-w-[400px] h-auto rounded-lg object-cover"
            />
          </motion.div>
        </div>

        <div className="container mx-auto py-8 ">
          <h2 className="text-2xl font-bold text-green-600 mb-6">
            From Training to Employment: Your Success Journey
          </h2>

          {/* Placement Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {placementData.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white shadow-lg border rounded-lg p-6 flex flex-col items-center gap-4 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-4 bg-gray-100 rounded-full">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-10 bg-gray-100 py-5 px-6">
        <OurPartnersLogoSlider
          title={"Placement Partners"}
          images={placementPartnersImages}
        />
      </div>
    </>
  );
};

export default PlacementTieUpsPage;
