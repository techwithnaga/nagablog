"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { IoMdClose } from "react-icons/io";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const { theme } = useContext(ThemeContext);

  const { data, status } = useSession();

  console.log(data, status);

  return (
    <div>
      {status !== "authenticated" ? (
        <div className="max-md:hidden">
          <Link href="/login">Login</Link>
        </div>
      ) : (
        <div className="max-md:hidden">
          <span className="cursor-pointer" onClick={signOut}>
            Logout
          </span>
        </div>
      )}

      <div
        className="md:hidden flex flex-col justify-between  cursor-pointer h-5 w-6"
        onClick={() => setOpen(!open)}
      >
        <div
          className={`${theme === "dark" ? "bg-white" : "bg-black"}  h-1`}
        ></div>
        <div
          className={`${theme === "dark" ? "bg-white" : "bg-black"}  h-1`}
        ></div>
        <div
          className={`${theme === "dark" ? "bg-white" : "bg-black"}  h-1`}
        ></div>
      </div>

      {open && (
        <div className="md:hidden fixed left-0 top-0 bg-black opacity-80 z-10 w-full h-full text-white flex justify-center items-center">
          <div className="flex flex-col gap-5 items-center justify-center relative">
            <IoMdClose
              onClick={() => setOpen(false)}
              className="text-red-600 cursor-pointer text-2xl absolute right-[-50px] top-[-50px]"
            />
            <Link href="/" className="text-2xl">
              Homepage
            </Link>
            <Link href="/" className="text-2xl">
              Contact
            </Link>
            <Link href="/" className="text-2xl">
              About
            </Link>

            {status !== "authenticated" ? (
              <Link href="/login" className="text-2xl">
                Login
              </Link>
            ) : (
              <span className="cursor-pointer text-2xl" onClick={signOut}>
                Logout
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthLinks;
