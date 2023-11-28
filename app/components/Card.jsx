import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className="flex gap-5">
      <div className="basis-1/2 relative max-xl:hidden">
        <Image
          src="/p1.jpeg"
          fill
          alt="cardImage"
          className="object-cover "
        ></Image>
      </div>
      <div className="basis-1/2 flex flex-col gap-5 py-3 max-xl:basis-full">
        <p>11.02.2023</p>

        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ab
          ullam quaerat. Sapiente quae ab deleniti quidem consequuntur.
          Molestias provident aspernatur repudiandae? Minima ab corrupti aliquam
          rem excepturi alias maiores.
        </p>
        <span>
          <Link href="/blog/1" className="border-b-2 border-red-200 pb-0.5">
            READ MORE...
          </Link>
        </span>
        <div>
          <label
            className="text-gray-400 border border-gray-400 p-1 rounded-md"
            htmlFor="culture"
          >
            culture
          </label>
        </div>
      </div>
    </div>
  );
};

export default Card;
