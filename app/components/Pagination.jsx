"use client";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { ThemeContext } from "../context/ThemeContext";

const Pagination = ({ page, hasNext, hasPrev, count }) => {
  const router = useRouter();
  const numberOfPages = Math.round(count / 5) + (count % 5 === 0 ? 0 : 1);

  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div className="flex mt-10 gap-5 justify-center">
      <button
        className=" ring-1 ring-slate-400 rounded-md text-white px-1 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => router.push(`?page=${page - 1}`)}
        disabled={!hasPrev}
      >
        <GrFormPrevious
          className={`${theme === "dark" ? "text-white" : "text-black"} `}
        />
      </button>
      {/* <GrFormPrevious
        onClick={() => router.push(`?page=${page - 1}`)}
        disabled={!hasPrev}
        className={`${
          theme === "dark" ? "text-white" : "text-black"
        } text-2xl ${hasPrev ? "cursor-pointer" : "cursor-auto"}`}
      /> */}
      {(() => {
        const arr = [];
        for (let i = 0; i < numberOfPages; i++) {
          arr.push(
            <button
              className={`rounded-md px-2 ring-1 ring-slate-400  rounderd-md ${
                page === i + 1 && "bg-slate-600 text-white"
              } `}
              onClick={() => router.push(`?page=${i + 1}`)}
            >
              {i + 1}
            </button>
          );
        }
        return arr;
      })()}
      <button
        className="ring-1 ring-slate-400 rounded-md text-white px-1 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => router.push(`?page=${page + 1}`)}
        disabled={!hasNext}
      >
        <GrFormNext
          onClick={() => router.push(`?page=${page + 1}`)}
          disabled={!hasNext}
          className={`${theme === "dark" ? "text-white" : "text-black"} `}
        />
      </button>
      {/* <GrFormNext
        onClick={() => router.push(`?page=${page + 1}`)}
        disabled={!hasNext}
        className={`${
          theme === "dark" ? "text-white" : "text-black"
        } cursor-pointer text-2xl`}
      /> */}
    </div>
  );
};

export default Pagination;
