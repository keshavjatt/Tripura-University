"use client";

import { motion, AnimatePresence } from "framer-motion";
import PageLinks from "@/components/common/pageLink";
import { ourRecognitions } from "@/lib/constants";
import { useEffect, useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import AnimatedHeading from "@/components/common/Heading";

const AwardsAndApprovalsPage = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  useEffect(() => {
    if (selectedPdf) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [selectedPdf]);

  return (
    <>
      <PageLinks
        title="Our Awards And Approvals"
        imageUrl="/images/pagelinks/approval.webp"
        items={[
          { name: "Home", link: "/" },
          {
            name: "Our Approvals",
            link: "/approvals-and-collabrations/awards-and-approvals",
          },
        ]}
      />

      <div className="container mx-auto py-8 px-5">
        <div className="certificates">
          <AnimatedHeading text="Approvals " variant="fadeDown" />
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-5 pb-10"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.15 }, // Staggered animations
              },
            }}
          >
            {ourRecognitions?.map((doc, index) => (
              <motion.div
                key={index}
                className="border p-3 rounded-lg shadow-md bg-white text-center cursor-pointer transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                variants={{
                  hidden: { opacity: 0, y: 20 }, // Slide up effect
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.4,
                      ease: "easeOut",
                    },
                  },
                }}
                onClick={() => setSelectedPdf(doc.url)}
              >
                <div className="flex items-center justify-center">
                  <FaFilePdf className="text-red-500 text-5xl" />
                </div>
                <p className="mt-2 theme-clr text-lg font-semibold">
                  {doc.name}
                </p>
                <p className="mt-2 text-blue-600 font-semibold">View</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* PDF Viewer with Smooth Animation */}
      <AnimatePresence>
        {selectedPdf && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-5 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedPdf(null)}
          >
            <motion.div
              className="bg-gray-900 pt-5 rounded-lg w-full max-w-4xl relative flex flex-col"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPdf(null)}
                className="absolute top-2 right-3 text-white hover:text-gray-400 text-2xl"
              >
                &times;
              </button>

              {/* PDF Viewer */}
              <iframe
                src={selectedPdf}
                className="w-full h-[90vh] rounded-lg border-none"
                title="PDF Preview"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AwardsAndApprovalsPage;
