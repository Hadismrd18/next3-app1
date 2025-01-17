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

const Card = dynamic(() => import("@/components/cards/RecipesCard"), {
  loading: () => <h1>loading each card...</h1>,
});
export default async function Page() {
  const response = await fetch("http://localhost:3000/api/recipes");
  const data = await response.json();
  console.log(data);
  return (
    <div className="relative w-full flex flex-col items-center">
      <Navbar />
      <div className="relative mt-10 p-5 rounded flex items-center justify-center">
        <h1 className="text-center font-extrabold text-amber-50 mt-40 mb-5 text-3xl">
          Recipes Page
        </h1>
        <Image
          alt="food"
          width={100}
          height={50}
          src="/recipe.jpg"
          className="absolute w-full rounded top-32 z-[-1]"
        />
      </div>

      <Suspense fallback={<p>loading recipe cards...</p>}>
        <div className="grid grid-cols-4 gap-10 m-10 mt-20">
          {data.map((item) => (
            <Card key={item._id} cardData={item} /> // Added key attribute
          ))}
        </div>
      </Suspense>
    </div>
  );
}
