import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ImageModal from "./ImageModal";

const ImagesList = ({ list }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % list.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? list.length - 1 : prevIndex - 1
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
    <motion.div
      className="container mx-auto"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((item, index) => (
          <motion.div
            key={index}
            className="relative cursor-pointer group rounded-lg overflow-hidden shadow-lg"
            onClick={() => openModal(index)}
            whileHover={
              index % 2 === 0
                ? { scale: 1.03, boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.15)" }
                : { scale: 1.05, translateY: -4 }
            }
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.img
              src={item.imgSrc}
              alt={`ImagesList ${index + 1}`}
              className="w-full max-h-[300px] object-cover rounded-lg transition-transform duration-300"
            />

            {/* Eye Icon Overlay */}
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <FaEye className="text-white text-4xl drop-shadow-md" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* MODAL ANIMATION */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-5 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-lg overflow-hidden w-full max-w-4xl relative flex flex-col"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <ImageModal
                imgSrc={list[currentIndex].imgSrc}
                closeModal={closeModal}
                nextImage={nextImage}
                prevImage={prevImage}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ImagesList;
