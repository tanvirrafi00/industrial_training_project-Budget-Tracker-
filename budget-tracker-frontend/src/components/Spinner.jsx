import React from "react";

export default function Spinner({ loading }) {
  return (
    <div
      className={`flex justify-center py-6 ${
        loading ? `visible` : `invisible`
      }`}
    >
      <div
        className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
