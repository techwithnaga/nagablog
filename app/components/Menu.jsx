import React from "react";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="basis-1/3 max-md:hidden">
      <div className="max-xl:hidden">
        <h5 className="font-light">What's hot</h5>
        <h2>Most Popular</h2>
        <div className="flex flex-col gap-5 mt-5 cursor-pointer">
          <div className="flex ">
            <div className="relative flex justify-center items-center shrink-0 basis-1/4 ">
              <Image
                src="/p1.jpeg"
                width={80}
                height={80}
                className="w-20 h-20 shrink-0 rounded-full"
              ></Image>
            </div>
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
                vero libero ullam repudiandae suscipit.
              </p>
              <label className="text-gray-500">
                Naga Tech - <span>18.10.2023</span>
              </label>
            </div>
          </div>
          <div className="flex">
            <div className="relative flex justify-center items-center shrink-0 basis-1/4 ">
              <Image
                src="/p1.jpeg"
                width={80}
                height={80}
                className="w-20 h-20 shrink-0 rounded-full"
              ></Image>
            </div>
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
                vero libero ullam repudiandae suscipit.
              </p>
              <label className="text-gray-500">
                Naga Tech - <span>18.10.2023</span>
              </label>
            </div>
          </div>

          <div className="flex ">
            <div className="relative flex justify-center items-center shrink-0 basis-1/4 ">
              <Image
                src="/p1.jpeg"
                width={80}
                height={80}
                className="w-20 h-20 shrink-0 rounded-full"
              ></Image>
            </div>
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
                vero libero ullam repudiandae suscipit.
              </p>
              <label className="text-gray-500">
                Naga Tech - <span>18.10.2023</span>
              </label>
            </div>
          </div>

          <div className="flex ">
            <div className="relative flex justify-center items-center shrink-0 basis-1/4 ">
              <Image
                src="/p1.jpeg"
                width={80}
                height={80}
                className="w-20 h-20 shrink-0 rounded-full"
              ></Image>
            </div>
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
                vero libero ullam repudiandae suscipit.
              </p>
              <label className="text-gray-500">
                Naga Tech - <span>18.10.2023</span>
              </label>
            </div>
          </div>

          <div className="flex">
            <div className="relative flex justify-center items-center shrink-0 basis-1/4 ">
              <Image
                src="/p1.jpeg"
                width={80}
                height={80}
                className="w-20 h-20 shrink-0 rounded-full"
              ></Image>
            </div>
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
                vero libero ullam repudiandae suscipit.
              </p>
              <label className="text-gray-500">
                Naga Tech - <span>18.10.2023</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 max-md:hidden">
        <h5 className="font-light">Discover by Topic</h5>
        <h2>Categories</h2>
        <div className="grid grid-cols-3 justify-items-center gap-5 mt-5">
          <Link
            href="/blog/style"
            className="w-20 border rounded-md border-gray-300 text-center py-1"
          >
            Style
          </Link>
          <Link
            href="/blog/fashion"
            className="w-20 border rounded-md border-gray-300 text-center py-1"
          >
            Fashion
          </Link>
          <Link
            href="/blog/food"
            className="w-20 border rounded-md border-gray-300 text-center py-1"
          >
            Food
          </Link>
          <Link
            href="/blog/travel"
            className="w-20 border rounded-md border-gray-300 text-center py-1"
          >
            Travel
          </Link>
          <Link
            href="/blog/culture"
            className="w-20 border rounded-md border-gray-300 text-center py-1"
          >
            Culture
          </Link>
          <Link
            href="/blog/coding"
            className="w-20 border rounded-md border-gray-300 text-center py-1"
          >
            Coding
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
