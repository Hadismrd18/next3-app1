// page.jsx
// import Card from "@/components/RecipesCard";
import Navbar from "@/components/Navbar";
import React, { Suspense } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
export const metadata = {
  title: "this is the recipes title",
  description: "this is the recipes description",
};

const Card = dynamic(() => import("@/components/RecipesCard"), {
  loading: () => <h1>loading each card...</h1>,
});
export default async function Page() {
  const response = await fetch("https://dummyjson.com/recipes");
  const data = await response.json();
  console.log(data);
  return (
    <div className="w-full flex flex-col items-center">
      <Navbar />
      <div className="relative mt-10 p-5 rounded flex items-center justify-center">
        <h1 className="text-center font-extrabold text-amber-50 my-5 text-3xl">
          Recipes Page
        </h1>
        <Image
          alt="food"
          width={100}
          height={50}
          src="/recipe.jpg"
          className="absolute w-full h-full rounded top-0 z-[-1]"
        />
      </div>

      <Suspense fallback={<p>loading recipe cards...</p>}>
        <div className="grid grid-cols-4 gap-10 m-10">
          {data.recipes.map((item) => (
            <Card key={item.id} cardData={item} /> // Added key attribute
          ))}
        </div>
      </Suspense>
    </div>
  );
}
