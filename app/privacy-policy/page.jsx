"use client";
import PageLinks from "@/components/common/pageLink";
import { privacyPolicyData } from "@/data/privacyPolicyData";
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <>
      <PageLinks
        title="Privacy Policy"
        imageUrl="/images/pagelinks/privacy-policy.webp"
        items={[
          { name: "Home", link: "/" },
          { name: "Privacy Policy", link: "/privacy-policy" },
        ]}
      />
      <div className="container mx-auto py-8 px-5 text-justify">
        <div className="text-gray-800 text-sm">
          We value the trust you place in us and recognize the importance of
          secure transactions and information privacy. This Privacy Policy
          describes how INDIRA GANDHI COMPUTER SAKSHARTA MISSION(IGCSM) and its
          affiliates (collectively “INDIRA GANDHI COMPUTER SAKSHARTA
          MISSION(IGCSM), we, our, us”) collect, use, share or otherwise process
          your personal information through INDIRA GANDHI COMPUTER SAKSHARTA
          MISSION(IGCSM) website www.IGCSM.org / www.IGCSMonline.co.in, its
          mobile application, and m-site (hereinafter referred to as the
          “Platform”).
          <br />
          By visiting the Platform, providing your information or availing our
          product/service, you expressly agree to be bound by the terms and
          conditions of this Privacy Policy, the Terms of Use and the applicable
          service/product terms and conditions. If you do not agree, please do
          not access or use our Platform.
        </div>
        {privacyPolicyData?.map((section, index) => (
          <div key={index} className="regBlk mt-3">
            <h4 className="font-bold py-2 theme-clr">{section.title}</h4>
            <div className="card-body">
              <div
                className="text-gray-700 text-sm text-justify"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
