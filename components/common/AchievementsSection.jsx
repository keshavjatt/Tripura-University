"use client";

import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaGraduationCap,
  FaCheckCircle,
  FaHourglassHalf,
  FaBriefcase,
} from "react-icons/fa";
import { projectsData } from "@/data/projectsData";

const AchievementsSection = () => {
  const trainingPartnersArray = projectsData.financialYears.flatMap(
    (year) => year.trainingPartners
  );

  const totals = trainingPartnersArray?.length
    ? trainingPartnersArray?.reduce(
        (acc, tp) => ({
          batches: acc.batches + (tp.batches || 0),
          enrolled: acc.enrolled + (tp.enrolled || 0),
          trained: acc.trained + (tp.trained || 0),
          // underTraining: acc.underTraining + (tp.underTraining || 0),
          placement: acc.placement + (tp.placement || 0),
        }),
        { batches: 0, enrolled: 0, trained: 0,  placement: 0 }
      )
    : { batches: 0, enrolled: 0, trained: 0,  placement: 0 };

  const stats = [
    {
      label: "Total Batches",
      value: totals.batches,
      icon: <FaUsers className="text-blue-600 text-4xl" />,
    },
    {
      label: "Total Enrolled",
      value: totals.enrolled,
      icon: <FaGraduationCap className="text-green-600 text-4xl" />,
    },
    {
      label: "Total Trained",
      value: totals.trained,
      icon: <FaCheckCircle className="text-purple-600 text-4xl" />,
    },
    {
      label: "Total Placements",
      value: totals.placement,
      icon: <FaBriefcase className="text-red-600 text-4xl" />,
    },
  ];

  return (
    <section className="container mx-auto">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl font-bold theme-clr mb-6"
      >
        Our Achievements
      </motion.h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-xl p-5 border border-gray-200 hover:bg-green-50 text-center"
          >
            <div className="flex justify-center mb-3">{stat.icon}</div>
            <h4 className="text-xl font-semibold text-gray-800">
              {stat.label}
            </h4>
            <p className="text-3xl font-bold theme-clr mt-2">
              <CountUp start={0} end={stat.value} duration={2} separator="," />
              {stat.value > 0 && " +"}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
