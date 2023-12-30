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
    <div className="basis-1/4 max-xl:hidden sticky right-0  ">
      <div className="mt-10 max-md:hidden">
        <p className="font-light">Discover more of what matters to you</p>
        <h2>Categories</h2>
        <div className="flex flex-wrap justify-items-center gap-3 mt-5 border border-gray-300 rounded-md p-3">
          {data?.map((item) => {
            return (
              <Link
                href={`/blog/?cat=${item.title}`}
                className="border rounded-md border-gray-300 text-center py-1 px-2 text-sm"
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
