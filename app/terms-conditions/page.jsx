"use client";
import PageLinks from "@/components/common/pageLink";
import { termsAndConditionsData } from "@/data/termsAndConditionData";
import React from "react";

const TermsConditionPage = () => {
  return (
    <>
      <PageLinks
        title="Terms And Conditions"
        imageUrl="/images/pagelinks/terms.webp"
        items={[
          { name: "Home", link: "/" },
          { name: "Terms And Conditions", link: "/terms-conditions" },
        ]}
      />
      <div className="container mx-auto py-8 px-5 text-justify">
        <div className="text-gray-800 text-sm flex flex-col gap-3">
          <p>
            Any user accessing and using the site of the organization/company
            will be deemed to have accepted all the Terms and Conditions
            referred herein as such along with the clauses that may be added up
            or deleted by the Organization/company from time to time.
          </p>
          <p>
            Anybody not accepting the terms and conditions are not expected to
            use the site of the Organization/company.
          </p>
          <p>
            Indira Gandhi Computer Saksharta Mission(IGCSM) reserves the right
            to make changes or updates with respect to the contents, design and
            layout of the website at any time of its choice and without any
            prior intimation.
          </p>
          <p>{`
            All the content provided is, with bonafide intention and with due care and in ‘as is and as available’
            format. However the Organization/company does not assume any responsibility for the inconvenience caused
            to any user and does not make any claim as to this site is free from viruses and other harmful elements.`}</p>
        </div>

        {termsAndConditionsData?.map((section, index) => (
          <div key={index} className="regBlk mt-3">
            <h4 className="font-bold py-2 theme-clr">{section?.title}</h4>
            <div className="card-body">
              <div
                className="text-gray-700 text-sm"
                dangerouslySetInnerHTML={{ __html: section?.content }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TermsConditionPage;
