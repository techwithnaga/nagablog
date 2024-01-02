"use client";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import { RingLoader } from "react-spinners";

const page = () => {
  const { status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center mt-16">
        <RingLoader color="#36d7b7"></RingLoader>
      </div>
    );
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="flex flex-1 justify-center items-center mt-12 mb-10">
      <div className=" flex justify-between rounded-md  max-md:px-10 items-center bg-gray-200 ">
        <Image
          src="/developer.jpg"
          width={300}
          height={500}
          className="rounded-md"
        ></Image>

        <div className="px-10">
          <div
            className="p-5 text-gray-500 cursor-pointer rounded-md font-bold flex items-center bg-white h-20"
            onClick={() => signIn("google")}
          >
            <Image src="/google.png" width={50} height={50}></Image>
            <p>Login with Google</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
