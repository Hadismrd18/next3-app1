"use client";

import React, { useState } from "react";
import { FaEye } from "react-icons/fa6";
import Link from "next/link";
import deleteData from "@/actions/delete";
import RecipeModal from "../modals/RecipeModal";

export default function RecipeList({ data }) {

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [recipeData, setRecipeData] = useState(data);
  const [editedRecipe, setEditedRecipe] = useState(null);
  // delete handler
  const deleteHandler = async (recipeId) => {
    await deleteData(recipeId, "recipes");
    const newRecipeData = recipeData.filter((item) => item._id !== recipeId);
    setRecipeData(newRecipeData);
  };

  // edit recipe
  const openEditModal = async (recipeId) => {
    setIsEditModalOpen(true);
    const currentRecipe = recipeData.find((item) => item._id === recipeId);
    setEditedRecipe(currentRecipe);
  };
  
  // handle open edit modal
  const handleOpen = (openState) => {
    setIsEditModalOpen(openState);
  };
  return (
    <>
      <div className="flex flex-col items-center gap-5">
        {data.map((item) => {
          return (
            <div
              key={item._id}
              className="w-full p-4 hover:bg-amber-300 transition-all duration-200 bg-amber-200 rounded py-6 flex flex-col items-center justify-between"
            >
              <h1 className="font-semibold text-fuchsia-900">{item.name}</h1>
              <p className="font-bold text-pink-700">{item.instructions}</p>
              <div className="w-full flex flex-col items-center gap-2">
                <div className="w-full bg-pink-900 flex flex-col items-center justify-around rounded p-1">
                  <span className="font-bold text-white ">
                    prep minutes: {item.prepMinutes}
                  </span>
                  <div className="flex items-center justify-center gap-1">
                    <FaEye className="text-white" />
                    <span className="font-bold text-white ">
                      rating: {item.rating}
                    </span>
                  </div>
                </div>
                <Link
                  href={`/recipes/${item._id}`}
                  className="w-full text-center bg-purple-900 text-amber-50 rounded px-3 py-1"
                >
                  More...
                </Link>
                <div className="w-full gap-5 flex items-center justify-between">
                  <button
                    onClick={() => deleteHandler(item._id)}
                    className="w-[50%] bg-pink-950 text-white rounded px-3 py-1"
                  >
                    DELETE
                  </button>
                  <button onClick={() => openEditModal(item._id)} className="w-[50%] bg-fuchsia-950 text-white rounded px-3 py-1">
                    EDIT
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {isEditModalOpen && (
        <div className="bg-amber-200 p-4 fixed top-60 right-96 shadow-2xl z-[1]">
          <div className="w-[400px]">
            <RecipeModal onOpen={handleOpen} recipe={editedRecipe} />
          </div>
        </div>
      )}
    </>
  );
}
