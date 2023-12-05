import React from "react";
import Pagination from "./Pagination";
import Card from "./Card";

const getPosts = async (page) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to get categories");
  }
  return res.json();
};

const CardList = async ({ page }) => {
  const { posts, count } = await getPosts(page);
  console.log(posts, count);
  const POST_PER_PAGE = 2;
  const hasPrev = page !== 1;
  const hasNext = page * POST_PER_PAGE < count;
  return (
    <div className="basis-2/3 max-md:basis-full ">
      <h2 className="mb-5">Recent Post</h2>
      <div className="flex flex-col gap-5">
        {posts?.map((item) => {
          return <Card item={item} key={item._id} />;
        })}
      </div>
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
    </div>
  );
};

export default CardList;
