import React from "react";
import Link from "next/link";
import { FaEye } from "react-icons/fa6";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const response = await fetch(`http://localhost:3000/api/recipes/${id}`);
  const post = await response.json();

  return {
    title: post.name,
    description: post.instructions,
  };
}
// implement find by id functionality!!!
export default async function page({ params }) {
  const { id } = await params;
  const userResponse = await fetch(
    `http://localhost:3000/api/recipes/${id}`
  );
  const userData = await userResponse.json();
  console.log(userData)
  const { _id, name, instructions, prepMinutes, rating } = userData;
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        key={_id}
        className="w-[70%] p-4 hover:bg-amber-300 hover:scale-105 transition-all duration-200 bg-amber-200 rounded py-6 flex flex-col items-center justify-between"
      >
        <h1 className="font-semibold text-fuchsia-900">{name}</h1>
        <p className="font-bold text-pink-700">{instructions}</p>
        <div className="w-full flex flex-col items-center gap-2">
          <div className="w-full bg-pink-900 flex items-center justify-around rounded p-1">
            <span className="font-bold text-white ">
              prep minutes: {prepMinutes}
            </span>
            <div className="flex items-center justify-center gap-1">
              <FaEye className="text-white" />
              <span className="font-bold text-white ">rating: {rating}</span>
            </div>
          </div>
          <Link
            href={`/recipes`}
            className="w-full text-center bg-purple-900 text-amber-50 rounded px-3 py-1"
          >
            Back to recipes
          </Link>
        </div>
      </div>
    </div>
  );
}
