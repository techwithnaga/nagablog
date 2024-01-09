"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import AuthLinks from "./AuthLinks";
import ThemeToggle from "./ThemeToggle";
import { useSession } from "next-auth/react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { data, status } = useSession();
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`flex items-center justify-between py-4 sticky top-0 z-10 font-mono ${
        theme === "dark" ? "bg-[#0f172a]" : "bg-softBgColor"
      }`}
    >
      <Link href="/">
        <div className="flex-1 text-center max-lg:text-start cursor-pointer">
          <h2>TechWithNaga.Blog</h2>
        </div>
      </Link>
      <div className="flex gap-5 justify-end flex-1 align-center items-center ">
        <ThemeToggle />
        {status === "authenticated" &&
          data.user.email === "techwithnaga@gmail.com" && (
            <Link className="max-md:hidden" href="/createBlog">
              Write
            </Link>
          )}

        {/* <Link className="max-md:hidden" href="/">
          01.Contact
        </Link> */}
        <Link className="max-md:hidden" href="/">
          Contact
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
