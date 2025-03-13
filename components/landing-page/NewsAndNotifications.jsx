"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import AnimatedHeading from "../common/Heading";

// Sample Data (Replace with API or dynamic data if needed)
const announcements = [
  {
    text: "कांठ में रोजगार मेले में ढाई सौ अभ्यार्थियों का किया गया चयन",
    link: "https://govitikanth.edu.in/newsandupdates.html",
  },
  {
    text: "Selection of 39 Candidates - Sardhana Kaushal Vikash Center",
    link: "https://igcsm.com/",
  },
  {
    text: "Campus drive is going on at Muzaffarnagar (DDUGKY and UPSDM)",
    link: "https://igcsm.com/",
  },
  {
    text: "Suspended Authorized Learning Centres (ALCs) Sep 2023 Order",
    link: "https://igcsm.com/",
  },
];

const circulars = [
  {
    text: "Suspended Authorized Learning Centres (ALCs) Sep 2023 Order",
    link: "https://igcsm.com/",
  },
  {
    text: "Campus drive is going on at Muzaffarnagar (DDUGKY and UPSDM)",
    link: "https://igcsm.com/",
  },
  {
    text: "Selection of 39 Candidates - Sardhana Kaushal Vikash Center",
    link: "https://igcsm.com/",
  },
  {
    text: "IGCSM RPL New Target - 500 - in Apperal & Home Furnishing",
    link: "https://igcsm.com/",
  },
];

const NewsAndNotifications = ({ isCol }) => {
  return (
    <div className="container mx-auto ">
      <div className="py-5">
        <AnimatedHeading
          text="News Updates"
          variant="fadeUp"
          className="text-[#60060F]"
        />
        <h4 className="text-xl font-bold text-[#60060F]">
          Latest News & Notice Board
        </h4>
      </div>


      {/* Conditionally apply flex or grid layout */}
      <div
        className={
          isCol
            ? "flex flex-col md:flex-col gap-8"
            : "grid grid-cols-1 md:grid-cols-2 gap-8"
        }
      >
        {/* Announcement Box */}
        <div className="bg-gray-200 text-black p-6 rounded-lg shadow-lg flex-1">
          <h3 className="text-center text-xl font-semibold mb-4">
            Announcement
          </h3>
          <div className="overflow-hidden h-48">
            <div className="space-y-3 animate-marquee hover:pause">
              {announcements.map((item, index) => (
                <p key={index} className="text-xs flex flex-row gap-3">
                  <FaArrowRight className="mr-1" />
                  {item.text}{" "}
                  <a href={item.link} className="text-yellow-700">
                    click here
                  </a>
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Circulars Box */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
          <h3 className="text-center text-xl font-semibold mb-4">Circulars</h3>
          <div className="overflow-hidden h-48">
            <div className="space-y-3 animate-marquee hover:pause">
              {circulars.map((item, index) => (
                <p
                  key={index}
                  className="text-xs text-gray-700 flex flex-row gap-3"
                >
                  <FaArrowRight className="mr-1" />
                  {item.text}{" "}
                  <a href={item.link} className="text-blue-500">
                    click here
                  </a>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndNotifications;
