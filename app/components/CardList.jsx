import React from "react";
import Pagination from "./Pagination";
import Card from "./Card";

const CardList = () => {
  return (
    <div className="basis-2/3 max-md:basis-full ">
      <h2 className="mb-5">Recent Post</h2>
      <div className="flex flex-col gap-5">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
