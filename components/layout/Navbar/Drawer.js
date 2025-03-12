"use client";
import React from "react";
import { AiOutlineClose } from "react-icons/ai"; 
import Link from "next/link";
import { CMP_TITLE } from "@/lib/constants";

const Drawer = ({ children, isOpen, setIsOpen }) => {
  return (
    <main
      className={`fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ${
        isOpen
          ? "transition-opacity opacity-100 duration-500 translate-x-0"
          : "transition-all delay-500 opacity-0 -translate-x-full"
      }`}
    >
      {/* Drawer Panel */}
      <section
        className={`w-[340px] max-w-lg left-0 absolute bg-white h-full shadow-xl transition-all transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <article className="relative w-[270px] max-w-lg pb-10 flex flex-col space-y-6 h-full">
          {/* Header */}
          <header className="p-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              {CMP_TITLE}
            </Link>
            <AiOutlineClose
              className="text-2xl cursor-pointer text-gray-600 hover:text-gray-800"
              onClick={() => setIsOpen(false)}
            />
          </header>

          {/* Drawer Content */}
          <div>{children}</div>
        </article>
      </section>

      {/* Background Overlay (Closes Drawer on Click) */}
      <section
        className="w-screen h-full cursor-pointer"
        onClick={() => setIsOpen(false)}
      ></section>
    </main>
  );
};

export default Drawer;
