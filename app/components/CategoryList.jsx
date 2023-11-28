import React from "react";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className="mt-10 gap-5 flex flex-col">
      <h1>Categories</h1>
      <div className="flex gap-5 flex-wrap">
        <Link
          href="/blog/style"
          className="flex items-center gap-3 border rounded-lg w-40 py-3 justify-center "
        >
          <div className="w-10 h-8 relative">
            <Image
              fill
              src="/style.png"
              alt="styleImage"
              className="rounded-full object-cover"
            ></Image>
          </div>
          <p className="text-p-bold">Style</p>
        </Link>

        <Link
          href="/blog/fashion"
          className="flex items-center gap-3 border rounded-lg w-40 py-3 justify-center "
        >
          <div className="w-8 h-8 relative">
            <Image
              fill
              src="/fashion.png"
              alt="fashionImage"
              className="rounded-full object-cover"
            ></Image>
          </div>
          <p className="bobboldfont">Fashion</p>
        </Link>
        <Link
          href="/blog/fashion"
          className="flex items-center gap-3 border rounded-lg w-40 py-3 justify-center "
        >
          <div className="w-8 h-8 relative">
            <Image
              fill
              src="/food.png"
              alt="foodImage"
              className="rounded-full object-cover"
            ></Image>
          </div>
          Food
        </Link>
        <Link
          href="/blog/coding"
          className="flex items-center gap-3 border rounded-lg w-40 py-3 justify-center "
        >
          <div className="w-8 h-8 relative">
            <Image
              fill
              src="/coding.png"
              alt="codingImage"
              className="rounded-full object-cover"
            ></Image>
          </div>
          Coding
        </Link>
        <Link
          href="/blog/travel"
          className="flex items-center gap-3 border rounded-lg w-40 py-3 justify-center "
        >
          <div className="w-8 h-8 relative">
            <Image
              fill
              src="/travel.png"
              alt="travelImage"
              className="rounded-full object-cover"
            ></Image>
          </div>
          Travel
        </Link>

        <Link
          href="/blog/style"
          className="flex items-center gap-3 border rounded-lg w-40 py-3 justify-center "
        >
          <div className="w-8 h-8 relative">
            <Image
              fill
              src="/style.png"
              alt="styleImage"
              className="rounded-full object-cover"
            ></Image>
          </div>
          <p className="text-p-bold">Style</p>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
