"use client";
import { ourCoursesData } from "@/data/coursesData";
import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedHeading from "../common/Heading";

const CoursesList = () => {
  return (
    <div className="container mx-auto ">
      <div className=" mx-auto">
        <AnimatedHeading text="Our Courses" variant="fadeUp" className="text-white" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 ">
          {ourCoursesData?.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

const CourseCard = ({ course }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const truncatedDesc = course.description?.slice(0, 120);
  const showReadMore = course.description.length > 120;

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all">
      <div className="flex justify-center">{course?.icon}</div>
      <div className="pt-4">
        <p className="text-xl text-center font-semibold theme-clr hover:font-bold">
          {course.title}
        </p>
        <p className="text-sm text-gray-700 mt-2 text-justify">
          {isExpanded ? course.description : `${truncatedDesc}...`}
        </p>
        {showReadMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-blue-500 hover:underline focus:outline-none text-sm"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default CoursesList;
