import Link from "next/link";
import React from "react";

const PageLinks = ({ items, title, imageUrl }) => {
  return (
    <section
      className="relative h-[250px] flex items-center justify-start bg-cover bg-center "
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
      <div className="relative z-10 text-white text-start container mx-auto  px-4">
        <h3 className="text-4xl font-bold capitalize">{title}</h3>
        <div className="flex items-center gap-2 mt-2 text-lg font-semibold">
          {items.map((item, index) => (
            <div key={index} className="capitalize">
              <Link href={item.link} className="hover:underline">
                {item.name}
              </Link>
              {index < items.length - 1 && <span className="mx-1">{`//`}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageLinks;
