// Card.jsx
"use client"; // Designating Card as a client component
import Link from "next/link";
import React from "react";

export default function Card({ cardData }) {
  const { id, firstName, lastName, age } = cardData;

  return (
    <div
      key={id}
      className="hover:bg-amber-300 hover:scale-105 transition-all duration-200 bg-amber-200 rounded py-6 flex flex-col items-center justify-between"
    >
      <h1 className="font-semibold text-fuchsia-900">
        {firstName} {lastName}
      </h1>
      <h2 className="font-bold text-pink-700">age: {age}</h2>
      <span className="font-bold text-pink-700">id: {id}</span>
      <Link
        href={`/users/${id}`}
        className="bg-purple-900 text-amber-50 rounded px-3 py-1"
      >
        More...
      </Link>
    </div>
  );
}
