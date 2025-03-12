"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import OurPartnersLogoSlider from "@/components/common/ourPartnersLogoSlider";
import PageLinks from "@/components/common/pageLink";
import { industryPartnersImages } from "@/lib/constants";

const IndustryPartnersPage = () => {
  return (
    <>
      <PageLinks
        title="Industry Partners"
        imageUrl="/images/pagelinks/partnership.webp"
        items={[
          { name: "Home", link: "/" },
          {
            name: "Industry Partners",
            link: "/approvals-and-collabrations/industry-tie-ups",
          },
        ]}
      />

      <div className="container mx-auto py-10 px-4 flex flex-col text-justify ">
        <motion.div
          className="text-4xl text-green-600 font-bold "
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          Industry Partners
        </motion.div>
        <div className="flex flex-col md:flex-row  py-10 gap-6">
          {/* Animated Text Section */}
          <motion.div
            className="w-full md:w-3/5 flex flex-col gap-5 px-5 indent-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-600">
              {`
              At Tripura Global Technical University, we believe in the power of collaboration to drive meaningful change.
              Our partnerships with leading industry players help bridge the gap between rural
              talent and modern workforce demands. Through hands-on training, mentorship programs,
              and employment opportunities, we equip individuals with the skills needed to thrive
              in today’s competitive job market. These collaborations not only uplift rural
              communities but also create a sustainable pipeline of skilled professionals for
              various industries. Together, we are shaping a future where talent knows no boundaries.
              `}
            </p>
            <p className="text-gray-600">
              {`
              Our industry partners contribute by providing skill-based training, apprenticeships,
              job placements, and mentorship, helping rural individuals gain the confidence and
              knowledge required to thrive in today's competitive job market. By working together,
              we are not only enhancing employability but also fostering entrepreneurship and
              economic growth in rural areas.
              `}
            </p>
          </motion.div>

          {/* Animated Image Section */}
          <motion.div
            className="flex justify-center w-full md:w-2/5 "
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/images/industry partners.jpg"
              width={400}
              height={250}
              alt="Our Work"
              className="w-full max-w-[500px] h-auto object-cover "
            />
          </motion.div>
        </div>

        {/* Logo Slider */}
        <div className="px-6 bg-gray-100 py-3">
          <OurPartnersLogoSlider
            title="Industry Partners"
            images={industryPartnersImages}
          />
        </div>
      </div>
    </>
  );
};

export default IndustryPartnersPage;
