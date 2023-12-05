"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div
      className={`px-[2px] relative w-10 h-5 ${
        theme === "dark" ? "bg-softBgColor" : "bg-black"
      } cursor-pointer rounded-3xl flex justify-between items-center`}
      onClick={toggle}
    >
      <Image src="/moon.png" alt="moon" width={14} height={14}></Image>
      <div
        className={`absolute w-3.5 h-3.5 rounded-[50%]  ${
          theme === "dark"
            ? "left-[1px] bg-black"
            : "right-[1px] bg-softBgColor"
        }`}
      ></div>
      <Image src="/sun.png" alt="sun" width={14} height={14}></Image>
    </div>
  );
};

export default ThemeToggle;
