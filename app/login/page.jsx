"use client";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const { data, status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <div className="flex justify-center items-center mt-10 mb-10">
      <div className="bg-gray-400  flex flex-col justify-center items-center px-40 py-28 gap-14 max-md:px-10 max-md:py-7 ">
        <div
          className="p-5 text-white cursor-pointer rounded-md font-bold bg-[#ff555f]"
          onClick={() => signIn("google")}
        >
          Sign in with Google
        </div>
        <div className="p-5 text-white cursor-pointer rounded-md font-bold bg-[#111]">
          Sign in with Github
        </div>
        <div className="p-5 text-white cursor-pointer rounded-md font-bold bg-[#087bea]">
          Sign in with Facebook
        </div>
      </div>
    </div>
  );
};

export default page;
