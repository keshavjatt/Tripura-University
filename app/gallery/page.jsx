"use client";
import ImagesList from "@/components/common/ImagesList";
import PageLinks from "@/components/common/pageLink";
import { awardsImages, galleryImages } from "@/lib/constants";
import React, { useState } from "react";

const GalleryPage = () => {
  const [currentTab, setCurrentTab] = useState("Awards");

  return (
    <>
      <PageLinks
        title="Gallery"
        imageUrl="/images/pagelinks/gallery.webp"
        items={[
          { name: "Home", link: "/" },
          { name: "Gallery", link: "/gallery" },
        ]}
      />

      <div className="container mx-auto py-8 px-5">
        <div className="mb-5 flex justify-center">
          <ul className="flex space-x-4 border-b">
            <li
              onClick={() => setCurrentTab("Awards")}
              className={`cursor-pointer pb-2 px-4 ${
                currentTab === "Awards"
                  ? "border-b-2 border-[#60060F] font-semibold"
                  : ""
              }`}
            >
              Awards
            </li>
            <li
              onClick={() => setCurrentTab("Gallery")}
              className={`cursor-pointer pb-2 px-4 ${
                currentTab === "Gallery"
                  ? "border-b-2 border-[#60060F] font-semibold"
                  : ""
              }`}
            >
              Gallery
            </li>
            <li
              onClick={() => setCurrentTab("Videos")}
              className={`cursor-pointer pb-2 px-4 ${
                currentTab === "Videos"
                  ? "border-b-2 border-[#60060F] font-semibold"
                  : ""
              }`}
            >
              Videos
            </li>
          </ul>
        </div>

        <div className="py-5">
          {currentTab === "Awards" && (
            <div>
              <ImagesList list={awardsImages} />
            </div>
          )}

          {currentTab === "Gallery" && (
            <div>
              <ImagesList list={galleryImages} />
            </div>
          )}

          {currentTab === "Videos" && <div>{/* <NoDataFound /> */}</div>}
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
