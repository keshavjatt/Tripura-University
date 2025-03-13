// Footer.js
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"
import Link from "next/link";
import { CMP_TITLE } from "@/lib/constants";
import Logo from "../common/Logo";

const socialLinks = [
  {
    icon: <FaFacebookF size={20} className="text-blue-600" />,
    link: "https://www.facebook.com",
    width: 10,
  },
  {
    icon: <FaInstagram className="text-pink-500" size={20} />,
    link: "https://www.instagram.com",
    width: 14,
  },
  {
    icon: <FaTwitter className="text-blue-400" size={20} />,
    link: "https://www.twitter.com",
    width: 14,
  },
];

const products = [
  {
    id: 1,
    section: "Quick links",
    links: [
      { name: "About", url: "/about-us" },
      { name: "How we work?", url: "/about-us" },
      // { name: "Our Approvals", url: "/approvals-and-collabrations/approvals" },
      { name: "FAQ", url: "/faq" },
    ],
  },
  {
    id: 2,
    section: "Useful Links",
    links: [
      { name: "Contact us", url: "/contact-us" },
      { name: "Work with us", url: "/career" },
      { name: "Gallery", url: "/gallery" },
      // { name: "Partners", url: "/partners" },
    ],
  },
  {
    id: 3,
    section: "Address",
    links: [
      {
        name: "Campus-Kamalghat, Mohanpur, Agartala -799210, Tripura (W)",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 theme-bg text-black bg-green-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 py-5 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">
          <div className="sm:col-span-6 lg:col-span-5">
            <div className="flex flex-shrink-0 items-center border-right">
              <div className="bg-white p-2 rounded-md shadow-md">
                <Logo  />
              </div>
            </div>
            <h3 className="text-xs font-medium lh-160 mt-5 mb-4 lg:mb-16 pr-10 text-white">
              {CMP_TITLE} is dedicated to empowering learners by offering
              accessible, high-quality education and skill development
              opportunities worldwide.
            </h3>
            <div className="flex gap-4">
              {socialLinks?.map((item, i) => (
                <Link href={item.link} key={i} target="">
                  <div className="bg-white h-12 w-12 shadow-xl rounded-full flex items-center justify-center hover:theme-clr">
                    {item?.icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Dynamic Columns */}
          {products?.map((product) => (
            <div key={product.id} className="sm:col-span-2">
              <p className="text-white text-lg font-medium mb-5">
                {product.section}
              </p>
              <ul>
                {product.links.map((link, index) => (
                  <li key={index} className="mb-5">
                    {link.url ? (
                      <Link
                        href={link.url}
                        className="text-white text-base font-normal mb-3 space-links"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <p className="text-white text-base font-normal mb-3">
                        {link.name}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom Section */}
        <div className="py-3 md:flex items-center justify-between border-t border-t-gray-blue">
          <h4 className="text-white text-sm text-center md:text-start font-normal">
            @2025.{CMP_TITLE}. All rights reserved
          </h4>
          <div className="flex gap-5 mt-5 md:mt-0 justify-center md:justify-start">
            <h4 className="text-white text-sm font-normal">
              <Link href="/privacy-policy" target="">
                Privacy policy
              </Link>
            </h4>
            <div className="h-5 bg-white opacity-25 w-0.5"></div>
            <h4 className="text-white text-sm font-normal">
              <Link href="/terms-conditions" target="">
                Terms & conditions
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
