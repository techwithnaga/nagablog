import React from "react";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { BsTags } from "react-icons/bs";
import { format } from "date-fns";
import CategoryBtn from "./CategoryBtn";
import { CgReadme } from "react-icons/cg";
import { BsCalendar2Date } from "react-icons/bs";

const Card = ({ key, item }) => {
  return (
    <div className="flex gap-8 items-center " key={key}>
      <div className="basis-1/3 relative h-[250px] max-md:hidden">
        <Image
          src={item.img}
          fill
          alt="cardImage"
          className="object-cover "
        ></Image>
      </div>
      <div className="basis-2/3 flex flex-col gap-3 max-md:basis-full">
        <div>
          <Link href={`/posts/${item.slug}`}>
            <h2 className="cursor-pointer">{item.title}</h2>
          </Link>
        </div>
        <div>
          <span className="text-sm text-gray-500">{parse(item.desc)}</span>
        </div>

        <div className="flex gap-5 items-center">
          <div className="flex gap-2 items-center">
            <Image
              src={item.user?.image}
              width={25}
              height={25}
              className="rounded-full"
              alt="user image"
            ></Image>
            <span className="text-xs text-gray-500">{item.user?.name}</span>
          </div>
          <div className="flex gap-1 items-center">
            <BsCalendar2Date className="text-gray-500"></BsCalendar2Date>
            <span className="text-xs text-gray-500">
              {format(item.createdAt, "MMM d, y")}
            </span>
          </div>

          <div className="flex gap-1 items-center">
            <CgReadme className="text-xl text-gray-500"></CgReadme>
            <span className="text-xs text-gray-500">
              {item.minutesToRead} mins read
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <BsTags></BsTags>
          {item.categories.map((cat) => {
            return (
              <CategoryBtn
                key={cat.id}
                title={cat.title}
                size="small"
              ></CategoryBtn>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
