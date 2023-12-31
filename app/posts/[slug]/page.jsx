import React from "react";
import Image from "next/image";
import Menu from "../../components/Menu";
import Comments from "../../components/Comments";
import parse from "html-react-parser";
import { MdAccessTime } from "react-icons/md";
import { FaRegComments } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { BsTags } from "react-icons/bs";
import { format } from "date-fns";
import CategoryBtn from "@/app/components/CategoryBtn";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to get categories");
  }
  return res.json();
};

const page = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);
  console.log(data);

  return (
    <div className="pb-[270px]">
      <div className="flex justify-between gap-10 mt-10">
        <div className="flex flex-col basis-3/4 gap-6 max-md:basis-full">
          <div className="w-full h-[450px] relative rounded-xl">
            <Image
              src="/deepmind.jpeg"
              alt={data.img}
              className="object-cover"
              fill
            ></Image>
          </div>

          <h1 className="">{data?.title}</h1>
          <div className="flex gap-5 text-gray-500">
            <p>by {data?.user?.name}</p>
            <div className="flex gap-2 items-center ">
              <MdAccessTime />
              {format(data.createdAt, "MMM d, Y")}
            </div>

            <div className="flex gap-2 items-center ">
              <FaRegComments />
              {data.comments.length} comments
            </div>

            <div className="flex gap-2 items-center ">
              <IoEyeOutline />
              {data.views} views
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <BsTags className="text-gray-500 text-xl"></BsTags>
            <div className="flex gap-2">
              {data.categories.map((cat) => {
                return (
                  <CategoryBtn title={cat.title} size="small"></CategoryBtn>
                );
              })}
            </div>
          </div>
        </div>
        <div className="basis-1/4 max-md:hidden">
          <Menu className=""></Menu>
        </div>
      </div>
      <div className="flex mt-16 gap-16">
        <div className="basis-2/3 max-md:basis-full">
          <div className=" flex flex-col gap-5 text-xl">{parse(data.desc)}</div>
          <div className="mt-16">
            <Comments postSlug={slug}></Comments>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
