import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const ImageModal = ({ imgSrc, closeModal, nextImage, prevImage }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={closeModal}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative rounded-lg"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute -top-7 right-0 text-white bg-red-600 p-2 rounded-full hover:bg-red-700 transition duration-300 mb-5"
        >
          <FaTimes className="text-lg " />
        </button>

        {/* Image */}
        <Image
          src={imgSrc}
          alt="img"
          height={500}
          width={650}
          className="h-full w-full min-w-[500px]"
        />

        {/* Previous Arrow */}
        <button
          onClick={prevImage}
          className="absolute md:-left-10 left-5 top-1/2 transform -translate-y-1/2 text-white rounded-full"
        >
          ◀
        </button>

        {/* Next Arrow */}
        <button
          onClick={nextImage}
          className="absolute md:-right-10 right-5 top-1/2 transform -translate-y-1/2 text-white rounded-full"
        >
          ▶
        </button>
      </motion.div>
    </div>
  );
};

export default ImageModal;
