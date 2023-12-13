import React from "react";
import Link from "next/link";
import Image from "next/image";
import AuthLinks from "./AuthLinks";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4 sticky top-0  z-10">
      <div className="flex gap-3 flex-1 justify-start max-lg:hidden ">
        <Image
          src="/facebook.png"
          alt="facebook"
          width={24}
          height={24}
          className="cursor-pointer"
        ></Image>
        <Image
          src="/instagram.png"
          alt="instagram"
          width={24}
          height={24}
          className="cursor-pointer"
        ></Image>
        <Image
          src="/tiktok.png"
          alt="tiktok"
          width={24}
          height={24}
          className="cursor-pointer"
        ></Image>
        <Image
          src="/youtube.png"
          alt="youtube"
          width={24}
          height={24}
          className="cursor-pointer"
        ></Image>
      </div>
      <Link href="/">
        <div className="flex-1 text-center max-lg:text-start cursor-pointer">
          <h2>Naga's Blog</h2>
        </div>
      </Link>
      <div className="flex gap-5 justify-end flex-1 align-center items-center ">
        <ThemeToggle />
        <Link className="max-md:hidden" href="/">
          Homepage
        </Link>
        <Link className="max-md:hidden" href="/">
          Contact
        </Link>
        <Link className="max-md:hidden" href="/">
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
