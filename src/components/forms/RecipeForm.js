"use client";
import React from "react";
import { useState } from "react";
import addData from "@/actions/add";

export default function RecipeForm() {

  const [name, setName] = useState("");
  const [instructions, setInstructions] = useState("");
  const [prepMinutes, setPrepMin] = useState("");
  const [rating, setRating] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    await addData({ name, instructions, prepMinutes, rating }, "recipes");
    setName("");
    setInstructions("");
    setPrepMin("");
    setRating("");

  };
  return (
    <form
      onSubmit={submitHandler}
      className="bg-pink-800 rounded w-full h-[500px] flex items-center justify-center flex-col gap-5"
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        className="w-[80%] rounded p-1"
        placeholder="name..."
      />
      <textarea
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        className="w-[80%] rounded p-1"
        placeholder="instructions..."
      ></textarea>
      <input
        value={prepMinutes}
        onChange={(e) => setPrepMin(e.target.value)}
        type="text"
        className="w-[80%] rounded p-1"
        placeholder="prep minutes..."
      />
      <input
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        type="text"
        className="w-[80%] rounded p-1"
        placeholder="ratings..."
      />
      <button type="submit" className="w-[80%] bg-pink-100 p-3 rounded">
        Submit
      </button>
    </form>
  );
}
