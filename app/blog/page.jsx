import React from "react";
import Menu from "../components/Menu";
import CardList from "../components/CardList";

const page = () => {
  return (
    <div>
      <h1 className="text-center bg-orange-500 py-2 rounded text-white">
        Style Blogs
      </h1>
      <div className="flex mt-5">
        <CardList></CardList>
        <Menu></Menu>
      </div>
    </div>
  );
};

export default page;
