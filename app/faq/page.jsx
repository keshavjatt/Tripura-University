"use client";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { motion } from "framer-motion"; // Import framer-motion
import faq_img from "@/public/images/faq.png";
import Image from "next/image";
import PageLinks from "@/components/common/pageLink";

const FaqPage = () => {
  const faqData = [
    {
      question: "What is Tripura Global Technical University?",
      answer:
        "Tripura Global Technical University is a company dedicated to enhancing digital literacy and providing advanced computer education through innovative programs and services.",
    },
    {
      question: "How can I join Tripura Global Technical University?",
      answer:
        "You can join Tripura Global Technical University by filling out the affiliation form on our website and making the required payment.",
    },
    {
      question: "What we do?",
      answer:
        "At Tripura Global Technical University, we focus on mobilizing, training, and placing candidates, equipping them with essential skills for meaningful employment.",
    },
    {
      question: "How can I contact Tripura Global Technical University?",
      answer:
        "You can contact us via email. Our office is located at IGCSM, 36B/1, Gali Number 1, near Kalkaji Depot, Govindpuri, New Delhi, Delhi 110019",
    },
  ];

  return (
    <>
      <PageLinks
        title="FAQ"
        imageUrl="/images/pagelinks/faq.webp"
        items={[
          { name: "Home", link: "/" },
          { name: "FAQ", link: "/faq" },
        ]}
      />
      <div className="container mx-auto mt-10 p-6 pb-20">
        <motion.h2
          className="w-full py-5 text-3xl text-green-600 font-bold"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-center">
          <motion.div
            className="w-full md:w-1/2 mt-6 md:mt-0"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4 bg-green-50 p-5">
              {faqData.map((faq, index) => (
                <Disclosure
                  key={index}
                  as="div"
                  className="border-b border-gray-300"
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex justify-between items-center w-full p-4 text-left text-md font-medium text-black focus:outline-none">
                        <span>{faq.question}</span>
                        {open ? (
                          <FaChevronUp className="h-6 w-6 text-gray-600" />
                        ) : (
                          <FaChevronDown className="h-6 w-6 text-gray-600" />
                        )}
                      </Disclosure.Button>

                      {/* Animate FAQ Answer Panel with Framer Motion */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: open ? 1 : 0,
                          height: open ? "auto" : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Disclosure.Panel className="p-4 text-gray-700 bg-gray-50">
                          {faq.answer}
                        </Disclosure.Panel>
                      </motion.div>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
          </motion.div>

          {/* Animate the Image with Framer Motion */}
          <motion.div
            className="w-full md:w-1/2 mt-6 md:mt-0"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={faq_img}
              width={400}
              height={400}
              alt="FAQ Illustration"
              className="w-full max-h-[300px] h-auto rounded-lg object-cover"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default FaqPage;
