"use client";
import PageLinks from "@/components/common/pageLink";
import ContactForm from "@/components/contact-us/ContactForm";
import careerImg from "@/public/images/career.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

const CareerPage = () => {
  return (
    <>
      <PageLinks
        title="Work With Us"
        imageUrl="/images/pagelinks/team.webp"
        items={[
          { name: "Home", link: "/" },
          { name: "Work With Us", link: "/career" },
        ]}
      />

      {/* Animated Container */}
      <motion.div
        className="container mx-auto py-8 px-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="theme-clr font-bold text-3xl">Work With Us</h3>

        <div className="flex flex-col justify-evenly md:flex-row gap-5 py-5">
          {/* Animated Form */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>

          {/* Animated Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={careerImg}
              width={500}
              height={500}
              alt="Work With Us"
              className=" "
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default CareerPage;
