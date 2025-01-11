// Card.jsx
"use client"; // Designating Card as a client component
import Link from "next/link";
import React, { useEffect } from "react";
import { FaEye } from "react-icons/fa6";
export default async function Card({ cardData }) {
  const { id, name, instructions, prepTimeMinutes, rating } = cardData;
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div
      key={id}
      className="p-4 hover:bg-amber-300 hover:scale-105 transition-all duration-200 bg-amber-200 rounded py-6 flex flex-col items-center justify-between"
    >
      <h1 className="font-semibold text-fuchsia-900">{name}</h1>
      <p className="font-bold text-pink-700">{instructions}</p>
      <div className="w-full flex flex-col items-center gap-2">
        <div className="w-full bg-pink-900 flex items-center justify-around rounded p-1">
          <span className="font-bold text-white ">
            prepTimeMinutes: {prepTimeMinutes}
          </span>
          <div className="flex items-center justify-center gap-1">
            <FaEye className="text-white" />
            <span className="font-bold text-white ">rating: {rating}</span>
          </div>
        </div>
        <Link
          href={`/recipes/${id}`}
          className="w-full text-center bg-purple-900 text-amber-50 rounded px-3 py-1"
        >
          More...
        </Link>
      </div>
    </div>
  );
}
