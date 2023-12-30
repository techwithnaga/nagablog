import React from "react";
import Menu from "../components/Menu";
import CardList from "../components/CardList";

const page = ({ searchParams }) => {
  const { cat } = searchParams;
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className="pb-[270px]">
      <hr />
      <h1 className="text-center  py-10 rounded ">{cat} Tutorials</h1>
      <div className="flex mt-5 gap-10">
        <CardList cat={cat} page={page}></CardList>
        <Menu></Menu>
      </div>
    </div>
  );
};

export default page;
