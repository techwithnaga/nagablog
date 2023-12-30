import React from "react";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

const Card = ({ key, item }) => {
  return (
    <div className="flex gap-8 items-start " key={key}>
      <div className="basis-1/3 relative h-[250px] max-md:hidden">
        <Image
          src="/p1.jpeg"
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

        <div className="flex gap-2 items-center">
          <Image
            src="/myPic.png"
            width={25}
            height={25}
            className="rounded-full"
          ></Image>
          <p className="text-xs text-gray-500">Masnaga</p>
          <p className="text-xs text-gray-500">11.02.2023</p>
        </div>
        <div className="flex gap-3">
          {item.categories.map((cat) => {
            return (
              <label
                className="text-gray-400 border border-gray-400 p-1 rounded-md cursor-pointer"
                htmlFor="culture"
              >
                {cat.title}
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
