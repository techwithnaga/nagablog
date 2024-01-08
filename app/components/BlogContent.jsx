"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useBlogStore } from "../utils/store";
import { useSession } from "next-auth/react";
import { MdAccessTime } from "react-icons/md";
import { FaRegComments } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { format } from "date-fns";
import { BsTags } from "react-icons/bs";
import CategoryBtn from "@/app/components/CategoryBtn";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import axios from "axios";
import { useRouter } from "next/navigation";

const BlogContent = () => {
  const { title, selectedCategories, mediaUrl } = useBlogStore();
  const [content, setContent] = useState("");
  const { data } = useSession();
  const router = useRouter();
  const handleSubmit = () => {
    axios
      .post("http://localhost:3000/api/posts", {
        slug: title,
        title: title,
        content: content,
        img: mediaUrl,
        categories: selectedCategories,
      })
      .then((res) => {
        console.log(res.data.slug);
        router.push(`/posts/${res.slug}`);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ["clean"], // remove formatting button
    ],
  };

  return (
    <div>
      <div className="flex justify-between gap-10 mt-10">
        <div className="flex flex-col basis-3/4 gap-6 max-md:basis-full">
          <div className="w-full h-[475px] relative rounded-xl">
            <Image
              src={mediaUrl}
              alt="blog header image"
              fill
              objectFit="cover"
            ></Image>
          </div>

          <h1 className="">{title}</h1>
          <textarea
            type="text"
            name="description"
            placeholder="Description..."
            rows={5}
            className="border-none bg-[softBgColor]"
          />
          <div className="flex gap-5 text-gray-500">
            <p>by {data?.user?.name}</p>
            <div className="flex gap-2 items-center ">
              <MdAccessTime />
              {format(new Date(), "MMM d, Y")}
            </div>

            <div className="flex gap-2 items-center ">
              <FaRegComments /> 0 comments
            </div>

            <div className="flex gap-2 items-center ">
              <IoEyeOutline />0 views
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <BsTags className="text-gray-500 text-xl"></BsTags>
            <div className="flex gap-2">
              {selectedCategories.map((cat) => {
                return (
                  <CategoryBtn title={cat.title} size="small"></CategoryBtn>
                );
              })}
            </div>
          </div>
        </div>
        <div className="basis-1/4 max-md:hidden">
          {/* <Menu className=""></Menu> */}
        </div>
      </div>
      <div className="flex mt-16 gap-16">
        <div className="basis-2/3 max-md:basis-full">
          <div className=" flex flex-col gap-5 text-xl">
            <ReactQuill
              theme="bubble"
              modules={modules}
              onChange={setContent}
              value={content}
              placeholder="Tell your story..."
              className="text-grey-700"
            ></ReactQuill>
          </div>
        </div>
      </div>
      <button
        className="bg-green-500 rounded-full px-5 py-3 text-white mt-10"
        onClick={() => handleSubmit()}
      >
        Publish
      </button>
    </div>
  );
};

export default BlogContent;
