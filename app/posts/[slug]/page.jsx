import React from "react";
import Image from "next/image";
import Menu from "../../components/Menu";
import Comments from "../../components/Comments";
import parse from "html-react-parser";

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
  // console.log(data);

  return (
    <div className="pb-[270px]">
      <div className="flex justify-between gap-10 mt-10">
        <div className="flex flex-col basis-1/2  max-md:basis-full">
          <h1 className="text-6xl max-2xl:text-5xl max-xl:text-4xl">
            {data?.title}
          </h1>
          <div className="flex gap-3 mt-8">
            {data?.user?.image && (
              <div className="w-12 h-12 relative ">
                <Image
                  src={data.user.image}
                  fill
                  className="object-cover rounded-full "
                ></Image>
              </div>
            )}

            <div>
              <p>{data?.user?.name}</p>
              <label>23 November 2023</label>
            </div>
          </div>
        </div>
        <div className="basis-1/2 max-md:hidden">
          <div className="w-full h-full relative">
            <Image
              src="/deepmind.jpeg"
              alt={data.img}
              fill
              className="object-cover rounded-xl"
            ></Image>
          </div>
        </div>
      </div>
      <div className="flex mt-16 gap-16">
        <div className="basis-2/3 max-md:basis-full">
          <div className=" flex flex-col gap-5 text-xl">{parse(data.desc)}</div>
          <div className="mt-16">
            <Comments postSlug={slug}></Comments>
          </div>
        </div>

        <Menu className="basis-1/3"></Menu>
      </div>
    </div>
  );
};

export default page;
