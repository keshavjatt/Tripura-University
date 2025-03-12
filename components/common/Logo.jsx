import Image from "next/image";
import React from "react";
import logo1 from "@/public/images/logo/tripura-logo.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="logo">
      <Image
        src={logo1}
        alt={"logo"}
        width={200}
        height={100}
        objectFit="cover"
      />
    </Link>
  );
};

export default Logo;
