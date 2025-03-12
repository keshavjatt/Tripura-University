"use client";
import React from "react";
import Image from "next/image";
import skillsImg from "@/public/images/skills/skills.jpg";
import { FaSchool, FaBriefcase, FaHandshake } from "react-icons/fa";
import PageLinks from "@/components/common/pageLink";
import { skillDevelopmentData } from "@/data/skillDevelopmentData";
import { CMP_TITLE, ourExpertiesImages } from "@/lib/constants";
import ImagesList from "@/components/common/ImagesList";

const skillCategories = [
  {
    title: "Candidate Mobilization",
    description:
      "We actively reach out to potential candidates through community engagement, awareness campaigns, and partnerships with local organizations. Our team conducts counseling sessions to understand their interests and career aspirations, ensuring they enroll in the right skill development program.",
    icon: <FaSchool className="text-blue-500 h-16 w-16" />,
  },
  {
    title: "Skill Training",
    description:
      "Once enrolled, candidates undergo industry-relevant training in various domains, including technical, vocational, and professional skills. Our programs are aligned with government initiatives, industry standards, and employer requirements. We also provide soft skills, personality development, and communication training to enhance their employability.",
    icon: <FaBriefcase className="text-green-500 h-16 w-16" />,
  },
  {
    title: "Placement Assistance",
    description:
      "After completing training, candidates receive career guidance, resume building, and interview preparation. We connect them with corporate partners, MSMEs, and government projects, facilitating job placements, apprenticeships, and entrepreneurship opportunities. Our strong network of employers ensures high placement rates, helping candidates build sustainable careers.",
    icon: <FaHandshake className="text-yellow-500 h-16 w-16" />,
  },
];

const OurSpecialitiesPage = () => {
  return (
    <>
      <PageLinks
        title="Our Specialities"
        imageUrl="/images/pagelinks/team.webp"
        items={[
          { name: "Home", link: "/" },
          { name: "Our Specialities", link: "/our-specialities" },
        ]}
      />
      <div className="container mx-auto px-4  py-5 text-justify">
        <h4 className="theme-clr text-4xl font-bold text-start ">
          Our Specialities
        </h4>
        <div className="mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 py-2">
            Empowering Rural Communities Through Skill Development
          </h1>
          <div className="flex flex-col md:flex-row gap-5">
            <div className=" w-full md:w-2/3 flex flex-col items-center">
              <p className=" text-lg text-gray-600 align-middle items-center">
                At <span className="font-semibold">{CMP_TITLE}</span>, we are
                committed to bridging the skill gap and empowering rural
                communities by providing high-quality skill development
                programs. Our goal is to equip individuals with practical,
                industry-relevant skills that enhance employability, promote
                self-reliance, and drive sustainable economic growth.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-3">
                {skillDevelopmentData?.map((category, index) => (
                  <div
                    key={index}
                    className="border p-4 rounded-lg shadow-md flex items-center gap-2 hover:cursor-pointer hover:bg-orange-100 hover:shadow-lg transition"
                  >
                    <span className="text-4xl">{category.icon}</span>
                    <span className="font-semibold text-gray-700">
                      {category.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <Image
                src={skillsImg}
                width={400}
                height={400}
                alt="services"
                className="w-full object-cover "
              />
            </div>
          </div>
        </div>

        <div className="cat py-10">
          <h2 className="text-2xl font-bold text-gray-800">
            Discover Our Approach to Skill Development
          </h2>{" "}
          <p className="text-gray-600 mt-2 ">
            At Euperaxis, we follow a structured approach to mobilize, train,
            and place candidates, ensuring they gain the right skills and secure
            meaningful employment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg shadow-md bg-white text-center hover:bg-orange-50 hover:cursor-pointer"
              >
                <div className="mb-4 flex justify-center">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-justify">{category.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="insights px-2">
          <h3 className="text-2xl theme-clr font-bold py-4">
            Crafting a Better Tomorrow with Our Expertise{" "}
          </h3>

          <ImagesList list={ourExpertiesImages} />
        </div>
      </div>
    </>
  );
};

export default OurSpecialitiesPage;
