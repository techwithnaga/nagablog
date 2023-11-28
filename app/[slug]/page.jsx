import React from "react";
import Image from "next/image";
import Menu from "../components/Menu";
import Comments from "../components/Comments";

const page = () => {
  return (
    <div className="">
      <div className="flex justify-between gap-10 mt-10">
        <div className="flex flex-col basis-1/2  max-md:basis-full">
          <h1 className="text-6xl max-2xl:text-5xl max-xl:text-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, cumque?
          </h1>
          <div className="flex gap-3 mt-8">
            <div className="w-12 h-12 relative ">
              <Image
                src="/p1.jpeg"
                fill
                className="object-cover rounded-full "
              ></Image>
            </div>

            <div>
              <p>Fnu Masnaga</p>
              <label>23 November 2023</label>
            </div>
          </div>
        </div>
        <div className="basis-1/2 max-md:hidden">
          <div className="w-full h-full relative">
            <Image
              src="/p1.jpeg"
              fill
              className="object-cover rounded-xl"
            ></Image>
          </div>
        </div>
      </div>
      <div className="flex mt-16 gap-16">
        <div className="basis-2/3 max-md:basis-full">
          <div className=" flex flex-col gap-5 text-xl">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur harum impedit necessitatibus, dolorum obcaecati
              quibusdam cum libero explicabo sunt id, recusandae adipisci velit
              voluptates suscipit voluptatibus! Minus corrupti repellendus
              similique.
            </p>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              corporis! Quod debitis deleniti enim doloribus sit ipsam cumque
              sint sunt?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
              voluptatibus ipsum exercitationem ab est dolores adipisci minima,
              animi impedit, dolorum, pariatur voluptatum tempora voluptas magni
              aliquid autem odio beatae reprehenderit. Iste similique dicta
              nisi. Tempora incidunt consectetur itaque quam fugit? Beatae porro
              voluptas aut possimus incidunt corporis sint aliquid odio?
            </p>
          </div>
          <div className="mt-16">
            <Comments></Comments>
          </div>
        </div>

        <Menu className="basis-1/3"></Menu>
      </div>
    </div>
  );
};

export default page;
