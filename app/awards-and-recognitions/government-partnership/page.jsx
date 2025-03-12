"use client";
import React from "react";
import { motion } from "framer-motion";
import PageLinks from "@/components/common/pageLink";
import Image from "next/image";
import govImg from '@/public/images/government.png';

const GovernmentPartnersPage = () => {
  return (
    <>
      <PageLinks
        title="Government Partners "
        imageUrl="/images/pagelinks/partnership.webp"
        items={[
          { name: "Home", link: "/" },
          {
            name: "Government Partners",
            link: "/awards-and-recognitions/government-partnership",
          },
        ]}
      />

      <div className="container mx-auto py-8 px-10 flex flex-col gap-5 text-justify">
        <motion.h2
          className="text-4xl theme-clr font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Government Partnership
        </motion.h2>

        <div className="flex flex-col md:flex-row text-justify">
          <div className="content w-full md:w-2/3">
            <motion.p
              className="text-gray-600 indent-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {`
                Our partnerships with government agencies are a cornerstone of our
                mission to uplift rural communities through skill development. By
                collaborating with central and state governments, we align our
                training programs with national initiatives like Skill India, PMKVY
                (Pradhan Mantri Kaushal Vikas Yojana), and other rural employment
                schemes. These collaborations allow us to bring structured vocational
                education, industry-relevant certifications, and sustainable
                employment solutions to remote areas where opportunities are scarce.
              `}
            </motion.p>

            <motion.p
              className="text-gray-600 indent-10 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {`
                Government support also enables us to build training centers, provide
                stipends for learners, and develop infrastructure that supports
                skill-building in rural regions. By working hand-in-hand with
                policymakers, we ensure that our initiatives reach those who need them
                the most, empowering women, youth, and marginalized communities with
                the skills necessary to secure stable jobs. Through these
                collaborations, we are not only creating employment but also
                contributing to India’s vision of an inclusive and self-reliant
                workforce.
              `}
            </motion.p>
          </div>

          <div className="flex justify-center order-4 md:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Image
                src={govImg}
                width={400}
                height={250}
                alt="Our Work"
                className="w-full max-w-[400px] h-auto rounded-lg object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GovernmentPartnersPage;
