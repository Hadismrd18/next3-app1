import React from "react";
import Link from "next/link";
export async function generateMetadata({ params }) {
  const {id} = await params
  const response = await  fetch(`http://localhost:3000/api/users/${id}`);
  const post = await response.json();

  return {
    title: post.firstName,
    description: post.lastName,
  };
}    
export default async function page({ params }) {
  const {id} = await params
  const userResponse = await fetch(`http://localhost:3000/api/users/${id}`);
  const userData = await userResponse.json();
  const { _id, firstName, lastName, age } = userData;
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        key={_id}
        className="w-[500px] hover:bg-amber-300 hover:scale-105 transition-all duration-200 bg-amber-200 rounded py-6 flex flex-col items-center justify-between"
      >
        <h1 className="font-semibold text-fuchsia-900">
         first name: {firstName} 
        </h1>
        <h1 className="font-semibold text-fuchsia-900">
         last name: {lastName}
        </h1>
        <h2 className="font-bold text-pink-700">age: {age}</h2>
       
        <Link
          href='/users'
          className="bg-purple-900 text-amber-50 rounded px-3 py-1"
        >
          Back to users
        </Link>
      </div>
    </div>
  );
}
