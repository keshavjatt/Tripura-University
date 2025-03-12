"use client";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import Drawer from "./Drawer";
import { CMP_TITLE } from "@/lib/constants";
import DrawerData from "./DrawerData";
import { NavMenu } from "@/data/navMenu";
import Logo from "@/components/common/Logo";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CustomLink = ({
  href,
  onClick,
  children,
}) => {
  return (
    <Link href={href}>
      <span onClick={onClick} className="px-3 text-lg font-normal cursor-pointer">
        {children}
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();

  const isActive = (href, subItems) => {
    return (
      pathname === href ||
      (subItems && subItems.some((subItem) => pathname === subItem.href))
    );
  };

  return (
    <Disclosure as="nav" className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            {NavMenu?.map((item) => (
              <div key={item.name} className="relative">
                {item.subItems ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpenDropdown(null)}
                      className={classNames(
                        isActive(item.href, item.subItems)
                          ? "text-[#60060F] font-semibold"
                          : "text-gray-700",
                        "hover:text-[#60060F] transition duration-300 text-lg"
                      )}
                    >
                      {item.name}
                    </Link>

                    {/* Dropdown */}
                    {openDropdown === item.name && (
                      <div className="absolute left-0 w-48 bg-white shadow-lg rounded-lg z-50 pt-2">
                        <ul>
                          {item.subItems.map((subItem) => (
                            <li key={subItem.name}>
                              <Link href={subItem.href} onClick={() => setOpenDropdown(null)}>
                                <span className="block px-4 py-2 text-gray-700 hover:bg-[#f3e8e9] transition duration-300 cursor-pointer">
                                  {subItem.name}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <CustomLink href={item.href} onClick={() => setOpenDropdown(null)}>
                    <span
                      className={classNames(
                        isActive(item.href) ? "text-[#60060F] font-semibold" : "text-gray-700",
                        "hover:text-[#60060F] transition duration-300 text-md"
                      )}
                    >
                      {item.name}
                    </span>
                  </CustomLink>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <FiMenu className="text-gray-700 text-2xl cursor-pointer" onClick={() => setIsOpen(true)} />
          </div>

          {/* Mobile Drawer */}
          {isOpen && (
            <div className="lg:hidden">
              <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <DrawerData setIsOpen={setIsOpen} />
              </Drawer>
            </div>
          )}
        </div>
      </div>
    </Disclosure>
  );
};

export default Navbar;
