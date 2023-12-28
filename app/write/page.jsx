"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { firebaseApp } from "../utils/firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

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
  const storage = getStorage(firebaseApp);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [file, setFile] = useState(null);
  const [catSlug, setCatSlug] = useState("");
  const [title, setTitle] = useState("");
  const [mediaUrl, setMediaUrl] = useState("");

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

  useEffect(() => {
    const upload = () => {
      const uniqueFileName = new Date().getTime + file.name;
      const storageRef = ref(storage, uniqueFileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log(downloadURL);
            setMediaUrl(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  return (
    <div className="mt-10">
      <input
        type="text"
        placeholder="Title"
        className="text-5xl border-none outline-none w-full p-3 bg-transparent"
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="flex gap-10 h-10 items-center my-5  z-10 w-full relative">
        <button
          className="border border-gray-400 rounded-full w-10 h-10 flex items-center justify-center absolute bg-gray-100"
          onClick={() => setOpen(!open)}
        >
          <Image src="/plus.png" alt="" width={20} height={20} />
        </button>

        {open && (
          <div className="flex gap-5 absolute left-16">
            <input
              type="file"
              id="image"
              onChange={(e) => updatefile(e.target.files[0])}
              className="hidden"
            ></input>
            <label htmlFor="image" className="cursor-pointer">
              <button className="border border-green-400 rounded-full w-10 h-10 flex items-center justify-center bg-gray-100">
                <Image src="/image.png" alt="" width={20} height={20} />
              </button>
            </label>
            <button className="border border-green-400 rounded-full w-10 h-10 flex items-center justify-center bg-gray-100 ">
              <Image src="/external.png" alt="" width={20} height={20} />
            </button>
            <button className="border border-green-400 rounded-full w-10 h-10 flex items-center justify-center bg-gray-100 ">
              <Image src="/video.png" alt="" width={20} height={20} />
            </button>
          </div>
        )}
      </div>
      <ReactQuill
        theme="bubble"
        onChange={setValue}
        value={value}
        placeholder="Tell your story..."
        className="text-grey-700 text-xl"
      ></ReactQuill>

      <div className="flex flex-col w-[20%] my-10">
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
    </div>
  );
};

export default page;
