"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};
const Comments = ({ postSlug }) => {
  const { status } = useSession();
  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comment?postSlug=${postSlug}`,
    fetcher
  );

  const handleSubmit = async () => {
    await fetch("/api/comment/", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
    setDesc("");
  };

  const [desc, setDesc] = useState("");

  useEffect(() => {}, [desc]);

  return (
    <div>
      <h2 className="text-gray-500">Comments</h2>
      {status === "authenticated" ? (
        <div className="flex justify-between gap-5 mt-5">
          <textarea
            placeholder="Write a comment..."
            className="w-full border border-gray-400 p-2 h-20 text-sm font-mono"
            name="comment"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>

          <button
            className="px-5 bg-teal-500 text-white rounded-xl"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      ) : (
        <>
          <Link href="/login">Please Sign In to Write a Review</Link>
        </>
      )}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data.map((item) => {
          return (
            <div key={item._id}>
              <div className="flex gap-5 mt-5">
                <div className="h-12 w-12 relative ">
                  <Image
                    src={item.user.image}
                    fill
                    className="rounded-full object-cover"
                  ></Image>
                </div>
                <div className="flex flex-col justify-center">
                  <span>{item.user.name}</span>
                  <span className="text-sm text-gray-400">
                    {item.createdAt.slice(0, 10)}
                  </span>
                </div>
              </div>
              <div className="mt-2 px-2">
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Comments;
