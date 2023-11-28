"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const page = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="mt-10">
      <input
        type="text"
        placeholder="Title"
        className="text-5xl border-none outline-none w-full p-3 bg-transparent"
      />
      <div className="flex gap-10 h-10 items-center my-5  z-10 w-full relative">
        <button
          className="border border-gray-400 rounded-full w-10 h-10 flex items-center justify-center absolute bg-gray-100"
          onClick={() => setOpen(!open)}
        >
          <Image src="/plus.png" alt="" width={20} height={20} />
        </button>

        {open && (
          <div className="flex gap-5 absolute left-16">
            <button className="border border-green-400 rounded-full w-10 h-10 flex items-center justify-center bg-gray-100">
              <Image src="/image.png" alt="" width={20} height={20} />
            </button>
            <button className="border border-green-400 rounded-full w-10 h-10 flex items-center justify-center bg-gray-100 ">
              <Image src="/external.png" alt="" width={20} height={20} />
            </button>
            <button className="border border-green-400 rounded-full w-10 h-10 flex items-center justify-center bg-gray-100 ">
              <Image src="/video.png" alt="" width={20} height={20} />
            </button>
          </div>
        )}
      </div>
      <ReactQuill
        theme="bubble"
        onChange={setValue}
        value={value}
        placeholder="Tell your story..."
        className="text-grey-700 text-xl"
      ></ReactQuill>

      <button className="bg-green-500 rounded-full px-5 py-3 text-white mt-10">
        {" "}
        Publish
      </button>
    </div>
  );
};

export default page;
