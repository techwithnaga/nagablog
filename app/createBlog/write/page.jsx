"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { uploadImage } from "../../utils/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FadeLoader } from "react-spinners";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }
  return data;
};

const page = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [file, setFile] = useState(null);
  const [catSlug, setCatSlug] = useState("");
  const [title, setTitle] = useState("");
  const [mediaUrl, setMediaUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const updatefile = (data) => {
    console.log(data);
  };

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        slug: slugify(title),
        img: mediaUrl,
        catSlug: catSlug || "Javascript",
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  const handleAddImage = async (e) => {
    e.preventDefault();

    if (!title) {
      toast.error("Please insert a title");
    } else {
      document.getElementById("image").click();
    }
  };

  const handleChange = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    setFile(e.target.files[0]);

    //upload Image to firebase
    const uniqueFileName = title;
    const newURL = await uploadImage(e.target.files[0], uniqueFileName);
    setMediaUrl(newURL);
    setIsUploading(false);
  };

  return (
    <div className="mt-10 w-[75%] flex-1">
      <input
        type="text"
        placeholder="Title"
        className="text-5xl border-none outline-none w-full p-3 bg-transparent"
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="flex gap-10 h-10 items-center my-5 z-10 w-full">
        <input
          type="file"
          id="image"
          onChange={(e) => handleChange(e)}
          className="hidden"
        ></input>

        <button
          className="border border-gray-400 rounded-full w-10 h-10 flex items-center justify-center bg-gray-100"
          onClick={(e) => handleAddImage(e)}
        >
          <Image src="/plus.png" alt="" width={20} height={20} />
        </button>

        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>

      {isUploading && <FadeLoader></FadeLoader>}

      {mediaUrl && (
        <div className="w-full h-[500px] relative rounded-xl">
          <Image
            src={mediaUrl}
            alt="blog header image"
            fill
            objectFit="cover"
          ></Image>
        </div>
      )}

      <ReactQuill
        theme="bubble"
        onChange={setValue}
        value={value}
        placeholder="Tell your story..."
        className="text-grey-700 text-xl"
      ></ReactQuill>

      <div className="flex flex-col">
        <select
          name="categories"
          id="categories"
          onSelect={(e) => setCatSlug(e.target.value)}
          className="bg-inherit p-3 border border-green-500 rounded-md"
        >
          <option value="Javascript">Javascript</option>
          <option value="Next.js">Next.js</option>
          <option value="Tailwind CSS">Tailwind CSS</option>
          <option value="Node.js">Node.js</option>
          <option value="MongoDB">MongoDB</option>
          <option value="Best-Practices">Best-Practices</option>
        </select>
        <button
          className="bg-green-500 rounded-full px-5 py-3 text-white mt-10"
          onClick={handleSubmit}
        >
          Publish
        </button>
      </div>
      <div style={{ clear: "both" }}></div>
    </div>
  );
};

export default page;
