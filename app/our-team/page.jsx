"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PageLinks from "@/components/common/pageLink";
import { ourTeamData } from "@/data/ourTeamData";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2 } 
  },
};

const OurTeamPage = () => {
  return (
    <>
      <PageLinks
        title="Our Team"
        imageUrl="/images/pagelinks/team.webp"
        items={[
          { name: "Home", link: "/" },
          { name: "Our Team", link: "/our-team" },
        ]}
      />

      <motion.div
        className="container mx-auto px-4 md:px-20 py-5"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h4 
          className="theme-clr text-4xl font-bold text-start pl-6 pb-5"
          variants={fadeInUp}
        >
          Our Team
        </motion.h4>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
          variants={staggerContainer}
        >
          {ourTeamData?.map((member, index) => (
            <motion.div
              key={index}
              className="bg-green-50 rounded-2xl shadow-lg overflow-hidden text-center flex flex-col"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }} // Subtle hover effect
            >
              <div className="relative w-full h-[300px]">
                <Image
                  src={member?.image}
                  alt={member?.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
                />
              </div>

              <div className="py-4 flex-grow flex flex-col justify-center">
                <h3 className="text-md font-semibold">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.designation}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default OurTeamPage;
