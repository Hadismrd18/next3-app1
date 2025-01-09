import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="w-full bg-amber-200  h-[100px] flex items-center shadow-sm">
      <ul className="w-full flex items-center justify-around">
        <Link
          href="/"
          className="bg-fuchsia-950 text-amber-50 font-medium py-2 px-5 rounded hover:bg-fuchsia-800 transition-all duration-200"
        >
          <li>Home</li>
        </Link>
        <Link
          href="/users"
          className="bg-fuchsia-950 text-amber-50 font-medium py-2 px-5 rounded hover:bg-fuchsia-800 transition-all duration-200"
        >
          <li>Users</li>
        </Link>
        <Link
          href="/posts"
          className="bg-fuchsia-950 text-amber-50 font-medium py-2 px-5 rounded hover:bg-fuchsia-800 transition-all duration-200"
        >
          <li>Posts</li>
        </Link>
        <Link
          href="/recipes"
          className="bg-fuchsia-950 text-amber-50 font-medium py-2 px-5 rounded hover:bg-fuchsia-800 transition-all duration-200"
        >
          <li>Recipes</li>
        </Link>
      </ul>
    </div>
  );
}
