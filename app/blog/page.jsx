import React from "react";
import Menu from "../components/Menu";
import CardList from "../components/CardList";

const page = ({ searchParams }) => {
  const { cat } = searchParams;
  const page = parseInt(searchParams.page) || 1;

  return (
    <div>
      <h1 className="text-center bg-orange-500 py-2 rounded text-white">
        {cat} Blogs
      </h1>
      <div className="flex mt-5 gap-10">
        <CardList cat={cat} page={page}></CardList>
        <Menu></Menu>
      </div>
    </div>
  );
};

export default page;
