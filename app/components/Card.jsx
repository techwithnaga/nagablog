import React from "react";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { BsTags } from "react-icons/bs";
import { format } from "date-fns";
import CategoryBtn from "./CategoryBtn";

const Card = ({ key, item }) => {
  console.log(item);
  return (
    <div className="flex gap-8 items-start " key={key}>
      <div className="basis-1/3 relative h-[250px] max-md:hidden">
        <Image
          src={item.img}
          fill
          alt="cardImage"
          className="object-cover "
        ></Image>
      </div>
      <div className="basis-2/3 flex flex-col gap-3 max-md:basis-full">
        <Link href={`/posts/${item.slug}`}>
          <h2 className="cursor-pointer">{item.title}</h2>
        </Link>

        {parse(item.desc)}
        {/* <p dangerouslySetInnerHTML={{ __html:  }}> */}

        <div className="flex gap-3 items-center">
          <Image
            src={item.user?.image}
            width={25}
            height={25}
            className="rounded-full"
            alt="user image"
          ></Image>
          <p className="text-xs text-gray-500">{item.user?.name}</p>
          <p className="text-xs text-gray-500">
            {format(item.createdAt, "MMM d, y")}
          </p>
        </div>
        <div className="flex gap-3">
          <BsTags></BsTags>
          {item.categories.map((cat) => {
            return <CategoryBtn title={cat.title} size="small"></CategoryBtn>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
