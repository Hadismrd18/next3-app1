"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import patchData from "@/actions/patch";
import { useRouter } from "next/navigation";
export default function RecipeModal({ recipe, onOpen }) {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [name, setName] = useState(recipe.name);
  const [instructions, setInstructions] = useState(recipe.instructions);
  const [prepMinutes, setPrepMin] = useState(recipe.prepMinutes);
  const [rating, setRating] = useState(recipe.rating);
  // submit form
  const submitHandler = async (e) => {
    e.preventDefault();
    await patchData(
      { name, instructions, prepMinutes, rating },
      recipe._id,
      "recipes"
    );
    setName("");
    setInstructions("");
    setPrepMin("");
    setRating("");
    setIsModalOpen(false)
    router.refresh()
  };
  // close modal
  useEffect(() => {
    onOpen(isModalOpen);
  }, [isModalOpen]);
  return (
    <>
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
    </>
  );
}
