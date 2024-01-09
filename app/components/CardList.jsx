import React from "react";
import Pagination from "./Pagination";
import Card from "./Card";
import Image from "next/image";

const getPosts = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to get categories");
  }
  return res.json();
};

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getPosts(page, cat);
  const POST_PER_PAGE = 5;
  const hasPrev = page !== 1;
  const hasNext = page * POST_PER_PAGE < count;
  return (
    <div className="basis-3/4 max-xl:basis-full ">
      {/* <h2 className="mb-5">Recent Post</h2> */}
      <div className="flex flex-col gap-12">
        {posts.length > 0 ? (
          posts.map((item) => {
            return <Card item={item} key={item._id} />;
          })
        ) : (
          <p> No blogs found under this category</p>
        )}
      </div>
      {!cat && (
        <Pagination
          page={page}
          hasNext={hasNext}
          hasPrev={hasPrev}
          count={count}
        />
      )}
    </div>
  );
};

export default CardList;
