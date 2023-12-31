"use client";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useRouter } from "next/navigation";

const CategoryBtn = ({ key, title, size }) => {
  const { theme } = useContext(ThemeContext);
  const router = useRouter();
  const handleClick = () => {
    console.log("handling click");
    router.push(`/blog/?cat=${title}`);
  };

  if (size === "small") {
    return (
      <button
        className={`text-sm  px-2 ${
          theme === "dark" ? "text-gray-400" : "text-gray-500"
        } ${
          theme === "dark" ? "bg-gray-800" : "bg-neutral-200"
        } font-bold rounded-md cursor-pointer`}
        onClick={() => handleClick()}
        id={key}
      >
        {title}
      </button>
    );
  } else if (size === "medium") {
    return (
      <button
        className={`text-base py-1 px-3 ${
          theme === "dark" ? "text-gray-400" : "text-gray-500"
        } ${
          theme === "dark" ? "bg-gray-800" : "bg-neutral-200"
        } font-bold rounded-md cursor-pointer`}
        onClick={() => handleClick()}
      >
        {title}
      </button>
    );
  }
};

export default CategoryBtn;
