"use client";
import React, { useState } from "react";
import { FaRegComments } from "react-icons/fa";
import Comments from "./Comments";

const CommentBtn = ({ length, slug }) => {
  const [showComments, setShowComments] = useState(false);

  const closeComments = () => {
    console.log("closing comments");
    setShowComments(false);
  };

  return (
    <div>
      <div onClick={() => setShowComments(!showComments)}>
        <div className="flex gap-1 items-center cursor-pointer hover:text-gray-950">
          <FaRegComments />
          <p className="text-xs text-gray-500 cursor-pointer hover:text-gray-950">
            {length} comments
          </p>
        </div>
      </div>
      {showComments && (
        <Comments postSlug={slug} closeComments={closeComments} />
      )}
    </div>
  );
};

export default CommentBtn;
