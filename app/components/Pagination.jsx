import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-between mt-5">
      <button className="w-24 bg-red-600 text-white py-3 rounded">
        Previous
      </button>
      <button className="w-24 bg-red-600 text-white py-3 rounded">Next</button>
    </div>
  );
};

export default Pagination;
