"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Pagination = ({ page, hasNext, hasPrev }) => {
  const router = useRouter();
  return (
    <div className="flex justify-between mt-5">
      <button
        className="w-24 bg-red-600 text-white py-3 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => router.push(`?page=${page - 1}`)}
        disabled={!hasPrev}
      >
        Previous
      </button>
      <button
        className="w-24 bg-red-600 text-white py-3 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => router.push(`?page=${page + 1}`)}
        disabled={!hasNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
