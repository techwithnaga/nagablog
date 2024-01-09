import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineMarkEmailRead } from "react-icons/md";

const Footer = () => {
  return (
    <div className=" flex flex-col justify-center items-center pt-3 border-t border-gray-200 ">
      <div className="mt-10 flex items-center max-xl:flex-col w-[70%]">
        <div className="flex flex-col gap-5">
          {/* <div className="flex gap-5 items-center basis-1/5 min-h-[150px] relative ">
          
          </div> */}
          <Image
            src="/myPic.png"
            width={150}
            height={200}
            className="rounded-3xl max-sm:hidden"
          ></Image>
          <div className="">
            <div className="flex gap-5 items-center">
              <h2>Written By Masnaga</h2>
              <div className="p-2 rounded-full bg-lime-500 hover:bg-lime-600 hover:text-gray-200">
                <a href="mailto:techwithnaga@gmail.com">
                  <MdOutlineMarkEmailRead className="text-2xl cursor-pointer"></MdOutlineMarkEmailRead>
                </a>
              </div>
            </div>

            <p className="mt-3 text-gray-500 text-sm">
              Passionate full-stack developer with{" "}
              {new Date().getFullYear() - 2020} experience bringing ideas to
              life across front-end (React, Next.js, TailwindCSS) and back-end
              (Node.js, Python) landscapes. Problem-solving prowess,
              collaborative spirit, and constant learning fuel innovative
              solutions for complex challenges. Eager to contribute my skills
              and fresh perspective to building amazing things. Let's connect
              and make magic happen!
            </p>
          </div>
        </div>
      </div>

      <div className="mt-7 flex justify-center p-2 w-[50%]">
        <label className="text-gray-400">
          &copy;Copyright {new Date().getFullYear()}. All rights reserved.
          Created by <span>Masnaga</span>
        </label>
      </div>
      <div style={{ clear: "both" }}></div>
    </div>
  );
};

export default Footer;
