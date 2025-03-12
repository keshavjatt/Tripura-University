import React, { useState } from "react";
import Link from "next/link";
import { NavMenu } from "@/data/navMenu";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DrawerData = ({ setIsOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleDropdownClick = (itemName) => {
    setDropdownOpen(dropdownOpen === itemName ? null : itemName);
  };

  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {NavMenu?.map((item) => (
              <div key={item.name} className="relative">
                {item.subItems ? (
                  <div>
                    <Link
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "text-black hover:opacity-100"
                          : "hover:text-black hover:opacity-100",
                        "py-1 text-lg font-normal opacity-75 block"
                      )}
                      aria-current={item.current ? "page" : undefined}
                      onClick={(e) => {
                        e.preventDefault();
                        handleDropdownClick(item.name);
                      }}
                    >
                      {item.name}
                    </Link>

                    {dropdownOpen === item.name && (
                      <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
                        <ul>
                          {item.subItems?.map((subItem) => (
                            <li
                              onClick={() => {
                                setIsOpen(false);
                                setDropdownOpen(null)
                              }}
                              key={subItem.name}
                            >
                              <Link
                                href={subItem?.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className={classNames(
                      item.current
                        ? "text-black hover:opacity-100"
                        : "hover:text-black hover:opacity-100",
                      "py-1 text-lg font-normal opacity-75 block"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerData;
