"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { FadeLoader } from "react-spinners";
import { uploadImage, deleteImage } from "../utils/firebase";
import { MdClose } from "react-icons/md";

import axios from "axios";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { green } from "@mui/material/colors";
import { useBlogStore } from "../utils/store";

const CreateBlog = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [fileName, setFileName] = useState("");
  const [openUpload, setOpenUpload] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [mediaUrl, setMediaUrl] = useState("");
  const [file, setFile] = useState(null);
  const [showTags, setShowTags] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [tags, setTags] = useState([]);
  const [checkBoxStates, setCheckBoxStates] = useState();
  const [errorMessages, setErrorMessages] = useState({
    title: "",
    mediaUrl: "",
    tags: "",
  });

  const { createBlog } = useBlogStore();

  const handleAddImage = (e) => {
    e.preventDefault();
    if (!title) {
      setErrorMessage("Please insert a title before uploading an image");
    } else {
      document.getElementById("image").click();
    }
  };

  const handleFileChange = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    setFile(e.target.files[0]);

    //upload Image to firebase
    const uniqueFileName = title;
    setFileName(title);
    const newURL = await uploadImage(e.target.files[0], uniqueFileName);
    setMediaUrl(newURL);
    setErrorMessages({ ...errorMessages, mediaUrl: "" });
    setIsUploading(false);
  };

  const handleTitleChange = (e) => {
    if (e.target.value.length >= 3) {
      setErrorMessages({ ...errorMessages, title: "" });
    }
    setTitle(e.target.value);
  };

  const handleDeleteImage = async () => {
    setIsUploading(true);

    //delete from firebase
    let res = await deleteImage(fileName);

    //update states
    if (res === "success") {
      setMediaUrl("");
      setFile(null);
    }
    setIsUploading(false);
  };

  const handleCheckBoxChange = (e) => {
    setCheckBoxStates({ ...checkBoxStates, [e.target.name]: e.target.checked });
    setShowNextButton(true);
    setErrorMessages({ ...errorMessages, tags: "" });
  };

  const handleSubmit = () => {
    //check for errors
    if (!isError()) {
      // localStorage.setItem("title", title);
      let listOfTags = [];
      for (const [key, value] of Object.entries(checkBoxStates)) {
        if (value) {
          listOfTags.push(key);
        }
      }
      createBlog(title, listOfTags, mediaUrl);
      router.push("/writecontent", { title, listOfTags, mediaUrl });
    }
  };

  const isError = () => {
    let result = false;
    let newErrorMessages = errorMessages;
    if (title.length < 3) {
      console.log("there is title error");
      newErrorMessages = {
        ...newErrorMessages,
        title: "Blog title should be at least 3 characters long.",
      };
      result = true;
    }
    if (!mediaUrl) {
      newErrorMessages = {
        ...newErrorMessages,
        mediaUrl: "Please upload an image.",
      };
      result = true;
    }

    if (!checkTags()) {
      newErrorMessages = {
        ...newErrorMessages,
        tags: "Please select a tag",
      };
      result = true;
    }
    setErrorMessages(newErrorMessages);
    return result;
  };

  const checkTags = () => {
    let res = false;
    for (const key in checkBoxStates) {
      res = res || checkBoxStates[key];
    }
    return res;
  };

  useEffect(() => {
    if (title.length >= 3) {
      setErrorMessage("");
      setOpenUpload(true);
    }
  }, [title]);

  //   useEffect(() => {
  //     console.log(checkBoxStates);
  //   }, [checkBoxStates]);

  useEffect(() => {
    if (mediaUrl) {
      setShowTags(true);
    }
  }, [mediaUrl]);

  useEffect(() => {
    console.log(errorMessages);
  }, [errorMessages]);

  useEffect(() => {
    const getCategories = async () => {
      await axios
        .get("http://localhost:3000/api/categories")
        .then((res) => {
          setTags(res.data);
          let tags = res.data;
          let newCheckBoxStates = {};
          for (let i = 0; i < tags.length; i++) {
            newCheckBoxStates = { ...newCheckBoxStates, [tags[i].slug]: false };
          }
          setCheckBoxStates(newCheckBoxStates);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    getCategories();
  }, []);

  return (
    <div className="my-10 flex-1 flex flex-col gap-5 ">
      <div className="ring-1 ring-gray-300 p-5 rounded-md ">
        <p>What is the title of your blog?</p>
        <input
          type="text"
          placeholder="Blog Title..."
          className="text-3xl font-bold border-none outline-none w-full p-3 bg-transparent ml-3"
          onChange={(e) => handleTitleChange(e)}
        />
        {errorMessages.title ? (
          <label className="text-red-400 ml-3">{errorMessages.title}</label>
        ) : (
          <label></label>
        )}
      </div>
      {openUpload && (
        <div className="ring-1 ring-gray-300 p-5 rounded-md ">
          <p>Which image would you like to use in your blog?</p>
          <input
            type="file"
            id="image"
            onChange={(e) => handleFileChange(e)}
            className="hidden"
          ></input>

          {isUploading ? (
            <FadeLoader className="mt-3 ml-3"></FadeLoader>
          ) : (
            <button
              className="border border-gray-400 rounded-md py-2 px-3 ml-3 font-xl mt-3 text-gray-500  "
              onClick={(e) => handleAddImage(e)}
            >
              Upload Image
            </button>
          )}
          <br />
          {errorMessage ? (
            <label className="text-red-400 ml-3">{errorMessage}</label>
          ) : (
            <label></label>
          )}

          {mediaUrl ? (
            <div className="flex gap-10 items-center  mt-5">
              <a
                href={mediaUrl}
                target="_blank"
                className=" ml-5 cursor-pointer font-bold"
              >
                Your Blog Image
              </a>
              <MdClose
                className="text-red-400 cursor-pointer text-2xl"
                onClick={() => handleDeleteImage()}
              />
            </div>
          ) : (
            <p></p>
          )}

          {errorMessages.mediaUrl ? (
            <label className="text-red-400 ml-3">
              {errorMessages.mediaUrl}
            </label>
          ) : (
            <label></label>
          )}
        </div>
      )}

      {showTags && (
        <div className="ring-1 ring-gray-300 p-5 rounded-md ">
          <p>What is your blog about?</p>

          <FormGroup className="ml-5">
            {tags?.map((tag) => {
              return (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkBoxStates[tag.slug]}
                      name={tag.slug}
                      onChange={(e) => handleCheckBoxChange(e)}
                      sx={{
                        color: green[800],
                        "&.Mui-checked": {
                          color: green[600],
                        },
                      }}
                    />
                  }
                  label={tag.title}
                />
              );
            })}
          </FormGroup>
          {errorMessages.tags ? (
            <label className="text-red-400 ml-3">{errorMessages.tags}</label>
          ) : (
            <label></label>
          )}
        </div>
      )}

      {showNextButton && (
        <button
          className="bg-green-700 rounded-full px-5 py-3 text-white mt-10 font-mono text-xl font-bold"
          onClick={handleSubmit}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default CreateBlog;
