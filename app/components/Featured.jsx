import React from "react";
import Image from "next/image";

const Featured = () => {
  return (
    <div className="flex items-center gap-10 mt-10 max-md:flex-col ">
      <div className=" h-96 relative w-full">
        <Image
          src="/p1.jpeg"
          alt="featuredImage"
          fill
          className="object-cover"
        ></Image>
      </div>
      <div className=" flex flex-col gap-5 items-start ">
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis,
          laborum?
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          tempore minima sunt consectetur assumenda aperiam molestias inventore
          delectus nam ex excepturi, ratione distinctio sed error repudiandae
          ducimus accusantium veniam perspiciatis?
        </p>
        <button className=" font-bold py-2 px-4 border rounded-md">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Featured;
