import React from "react";
import Link from "next/link";
import { FaEye } from "react-icons/fa6";
export default async function page({ params }) {
  const userResponse = await fetch(`https://dummyjson.com/posts/${params.id}`);
  const userData = await userResponse.json();
  const { id, title, body, views, userId } = userData;
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        key={id}
        className="w-[500px] p-4 hover:bg-amber-300 hover:scale-105 transition-all duration-200 bg-amber-200 rounded py-6 flex flex-col items-center justify-between"
      >
        <h1 className="font-semibold text-fuchsia-900">{title}</h1>
        <p className="font-bold text-pink-700">{body}</p>
        <div className="w-full flex flex-col items-center gap-2">
          <div className="w-full bg-pink-900 flex items-center justify-around rounded p-1">
            <span className="font-bold text-white ">userId: {userId}</span>
            <div className="flex items-center justify-center gap-1">
              <FaEye className="text-white" />
              <span className="font-bold text-white ">views: {views}</span>
            </div>
          </div>
          <Link
            href="/posts"
            className="w-full text-center bg-purple-900 text-amber-50 rounded px-3 py-1"
          >
            Back to posts
          </Link>
        </div>
      </div>
    </div>
  );
}
