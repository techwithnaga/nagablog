import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" absolute bottom-0 h-[250px] ">
      <div className="mt-10 flex items-center max-xl:flex-col">
        <div className="basis-2/3 flex gap-5">
          {/* <div className="flex gap-5 items-center basis-1/5 min-h-[150px] relative ">
          
          </div> */}
          <Image
            src="/myPic.png"
            width={150}
            height={200}
            className="rounded-xl max-sm:hidden"
          ></Image>
          <div className="">
            <h2>Masnaga</h2>
            <p className="mt-3 text-gray-500 text-sm">
              A web developer who is passionate in crafting beautiful,
              functional web experiences and love the power of the web to
              connect people and make a difference. Skilled in building both
              front-end and back-end. Love collaborating to bring your web ideas
              to life. Let's build something amazing together!
            </p>
          </div>
        </div>

        <div className="basis-1/3 flex flex-col gap-5 items-center max-xl:mt-10">
          <h4>Let's Connect</h4>
          <div className="flex gap-3 mt-1 justify-center">
            <Image
              className="cursor-pointer"
              src="/facebook.png"
              width={20}
              height={20}
            ></Image>
            <Image
              className="cursor-pointer"
              src="/instagram.png"
              width={20}
              height={20}
            ></Image>
            <Image
              className="cursor-pointer"
              src="/tiktok.png"
              width={20}
              height={20}
            ></Image>
            <Image
              className="cursor-pointer"
              src="/youtube.png"
              width={20}
              height={20}
            ></Image>
          </div>
        </div>
      </div>

      <div className="mt-5 flex justify-center p-2">
        <label className="text-gray-400">
          &copy;Copyright {new Date().getFullYear()}. All rights reserved.
          Created by{" "}
          <span>
            <a href="">Masnaga</a>
          </span>
        </label>
      </div>
    </div>
  );
};

export default Footer;
