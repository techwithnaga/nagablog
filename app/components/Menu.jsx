import React from "react";
import Link from "next/link";
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to get categories");
  }
  return res.json();
};
const Menu = async () => {
  const data = await getData();
  return (
    <div className="basis-1/3 max-md:hidden sticky right-0">
      {/* <div className="max-xl:hidden">
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
      </div> */}

      <div className="mt-10 max-md:hidden">
        <p className="font-light">Discover more of what matters to you</p>
        <h2>Categories</h2>
        <div className="flex flex-wrap justify-items-center gap-3 mt-5 border border-gray-300 rounded-md p-3">
          {data.map((item) => {
            return (
              <Link
                href="/blog/style"
                className="border rounded-md border-gray-300 text-center py-1 px-2"
                key={item._id}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
