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
import { BsCalendar2Date } from "react-icons/bs";
import { CgReadme } from "react-icons/cg";
// import { useQuery } from "@tanstack/react-query";

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

  // const { isPending, isError, data, error } = useQuery({
  //   queryKey: ["article"],
  //   queryFn: getData,
  // });

  // if (isPending) {
  //   return <span>Loading...</span>;
  // }

  // if (isError) {
  //   return <span>Error: {error.message}</span>;
  // }

  return (
    <div className="pb-[270px]">
      <div className="flex justify-between gap-10 mt-10">
        <div className="flex flex-col basis-3/4 gap-6 max-md:basis-full">
          <div className="w-full h-[475px] relative rounded-xl">
            <Image
              src={data.img}
              alt="blog header image"
              fill
              objectFit="cover"
            ></Image>
          </div>

          <h1 className="">{data?.title}</h1>
          <div className=" text-sm text-gray-500">{data.desc}</div>
          <div className="flex gap-5 text-gray-500">
            <p className="text-xs text-gray-500">by {data?.user?.name}</p>
            <div className="flex gap-1 items-center ">
              <BsCalendar2Date className="text-xs" />
              <p className="text-xs text-gray-500">
                {format(data.createdAt, "MMM d, Y")}
              </p>
            </div>

            <div className="flex gap-1 items-center ">
              <FaRegComments />
              <p className="text-xs text-gray-500">
                {data.comments.length} comments
              </p>
            </div>

            <div className="flex gap-1 items-center ">
              <IoEyeOutline />
              <p className="text-xs text-gray-500">{data.views} views</p>
            </div>
            <div className="flex gap-1 items-center">
              <CgReadme className="text-base text-gray-500"></CgReadme>
              <p className="text-xs text-gray-500">
                {data.minutesToRead} mins read
              </p>
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

          <hr />

          <div className=" flex flex-col gap-5 text-xl">
            {parse(data.content)}
          </div>
        </div>
        <div className="basis-1/4 max-md:hidden">
          <Menu className=""></Menu>
        </div>
      </div>

      <div className="flex mt-16 gap-16">
        <div className="basis-2/3 max-md:basis-full">
          <div className="mt-16">
            <Comments postSlug={slug}></Comments>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
