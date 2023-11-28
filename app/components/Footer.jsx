import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-10 flex py-5 items-center max-sm:flex-col">
      <div className="flex-1">
        <div className="flex gap-5 items-center">
          <Image src="/logo.png" width={60} height={60}></Image>
          <h1>Naga Blog</h1>
        </div>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit
          a praesentium ea aperiam facere adipisci hic distinctio molestiae
          optio quia maiores quas officia ipsa, asperiores in sint aliquid.
          Modi.
        </p>
        <div className="flex gap-2 mt-5">
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

      <div className="flex gap-20 flex-1 justify-center max-lg:gap-10 max-md:gap-5 max-sm:mt-10 max-sm:justify-between max-sm:w-full">
        <div className="flex flex-col gap-2">
          <h5>Links</h5>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>

        <div className="flex flex-col gap-2">
          <h5>Tags</h5>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>

        <div className="flex flex-col gap-2">
          <h5>Social</h5>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
