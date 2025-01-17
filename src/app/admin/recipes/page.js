

import RecipeForm from "@/components/forms/RecipeForm";
import RecipeList from "@/components/lists/RecipeList";
import React from "react";

export default async function page() {
  const response = await fetch("http://localhost:3000/api/recipes");
  const data = await response.json();
  console.log(data);
  return (
    <div className="w-[60%] flex flex-col items-center justify-between h-full">
      <RecipeForm />
      <div className="w-full mt-10 flex flex-col gap-5 bg-pink-800 p-1">
        <RecipeList data={data} />
      </div>
    </div>
  );
}
