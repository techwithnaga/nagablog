"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { IoMdClose } from "react-icons/io";
import { signOut, useSession } from "next-auth/react";
import { MdClose } from "react-icons/md";
import Image from "next/image";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const { theme } = useContext(ThemeContext);

  const { data, status } = useSession();

  return (
    <div>
      {status !== "authenticated" ? (
        <div className="max-md:hidden">
          <Link href="/login">Login</Link>
        </div>
      ) : (
        <div className="max-md:hidden flex gap-3 items-center">
          {/* <p>Hi, {data.user.name.split(" ")[0]}</p> */}
          <Image
            src={data.user.image}
            width={35}
            height={35}
            className="rounded-full cursor-pointer"
            onClick={() => setShowLogout(!showLogout)}
          ></Image>
          {/* <span className="cursor-pointer" onClick={signOut}>
            Logout
          </span> */}
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
            {/* <Link href="/" className="text-2xl">
              Homepage
            </Link>
            <Link href="/" className="text-2xl">
              Contact
            </Link> */}
            <Link href="/" className="text-2xl">
              Contact
            </Link>

            {status !== "authenticated" ? (
              <Link href="/login" className="text-2xl">
                Login
              </Link>
            ) : (
              <span className="cursor-pointer text-2xl" onClick={signOut}>
                Sign Out
              </span>
            )}
          </div>
        </div>
      )}

      {showLogout && (
        <div className="  bg-slate-200 p-3 ring ring-slate-200 rounded-xl absolute right-0 top-20 w-60 flex flex-col items-center gap-5">
          <div className="flex justify-between items-center gap relative">
            <p>Hi, {data.user.name.split(" ")[0]}</p>
            <MdClose
              className="text-2xl absolute right-[-65px] cursor-pointer"
              onClick={() => setShowLogout(false)}
            />
          </div>

          <Image
            src={data.user.image}
            width={75}
            height={75}
            className="rounded-full "
          ></Image>

          <button
            className="cursor-pointer py-3 px-10 rounded-2xl bg-white"
            onClick={signOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthLinks;
