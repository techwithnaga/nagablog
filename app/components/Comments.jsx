import React from "react";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";
  return (
    <div>
      <h2 className="text-gray-500">Comments</h2>
      {status === "authenticated" ? (
        <div className="flex justify-between gap-5 mt-5">
          <textarea
            placeholder="Write a comment..."
            className="w-full border border-gray-400 p-2 h-20 text-sm font-mono"
            name="comment"
          ></textarea>

          <button className="p-5 bg-teal-500 text-white rounded-xl">
            Send
          </button>
        </div>
      ) : (
        <>
          <Link>Please Sign In to Write a Review</Link>
        </>
      )}
      <div>
        <div className="flex gap-5 mt-5">
          <div className="h-12 w-12 relative ">
            <Image
              src="/p1.jpeg"
              fill
              className="rounded-full object-cover"
            ></Image>
          </div>
          <div className="flex flex-col justify-center">
            <span>Fnu Masnaga</span>
            <span className="text-sm text-gray-400">23 November 2023 </span>
          </div>
        </div>
        <div className="mt-2 px-2">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            ut praesentium delectus temporibus est dolores debitis, alias
            deserunt consequatur? Omnis nisi placeat aperiam exercitationem
            libero error repellendus dolorum ducimus perferendis?
          </p>
        </div>
      </div>
      <div>
        <div className="flex gap-5 mt-5">
          <div className="h-12 w-12 relative ">
            <Image
              src="/p1.jpeg"
              fill
              className="rounded-full object-cover"
            ></Image>
          </div>
          <div className="flex flex-col justify-center">
            <span>Fnu Masnaga</span>
            <span className="text-sm text-gray-400">23 November 2023 </span>
          </div>
        </div>
        <div className="mt-2 px-2">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            ut praesentium delectus temporibus est dolores debitis, alias
            deserunt consequatur? Omnis nisi placeat aperiam exercitationem
            libero error repellendus dolorum ducimus perferendis?
          </p>
        </div>
      </div>
      <div>
        <div className="flex gap-5 mt-5">
          <div className="h-12 w-12 relative ">
            <Image
              src="/p1.jpeg"
              fill
              className="rounded-full object-cover"
            ></Image>
          </div>
          <div className="flex flex-col justify-center">
            <span>Fnu Masnaga</span>
            <span className="text-sm text-gray-400">23 November 2023 </span>
          </div>
        </div>
        <div className="mt-2 px-2">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            ut praesentium delectus temporibus est dolores debitis, alias
            deserunt consequatur? Omnis nisi placeat aperiam exercitationem
            libero error repellendus dolorum ducimus perferendis?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
