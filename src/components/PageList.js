import React from "react";
import Link from "next/link";
export default function PageList() {
  return (
    <div className="w-full px-20flex flex-col gap-5">
      <Link
        href="/users"
        className="font-bold text-2xl text-fuchsia-950 hover:scale-105 transition-all duration-200 hover:bg-amber-300 flex items-center justify-center w-full bg-amber-200 rounded h-1/3"
      >
        Users Page
      </Link>
      <Link
        href="/posts"
        className="font-bold text-2xl text-fuchsia-950 hover:scale-105 transition-all duration-200 hover:bg-amber-300 flex items-center justify-center w-full bg-amber-200 rounded h-1/3"
      >
        Posts Page
      </Link>
      <Link
        href="/recipes"
        className="font-bold text-2xl text-fuchsia-950 hover:scale-105 transition-all duration-200 hover:bg-amber-300 flex items-center justify-center w-full bg-amber-200 rounded h-1/3"
      >
        Recipes Page
      </Link>
    </div>
  );
}
