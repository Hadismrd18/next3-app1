import Navbar from "@/components/Navbar";
import React from "react";
import Link from "next/link";
export default function page({ children }) {
  return (
    <div className=" w-[100vw] h-[100vh] relative">
      <Navbar  />
      <div className="px-20 gap-10 mt-[200px] w-full flex items-center justify-between">
        {children}
        <div className="w-[40%] fixed right-0 top-52 bottom-0">
          <div className="w-full px-20 flex flex-col gap-5">
            <Link
              href="/admin/users"
              className="font-bold text-2xl text-fuchsia-950 hover:scale-105 transition-all duration-200 hover:bg-amber-300 flex items-center justify-center w-full bg-amber-200 rounded h-[150px]"
            >
              Users Page
            </Link>
            <Link
              href="/admin/posts"
              className="font-bold text-2xl text-fuchsia-950 hover:scale-105 transition-all duration-200 hover:bg-amber-300 flex items-center justify-center w-full bg-amber-200 rounded h-[150px]"
            >
              Posts Page
            </Link>
            <Link
              href="/admin/recipes"
              className="font-bold text-2xl text-fuchsia-950 hover:scale-105 transition-all duration-200 hover:bg-amber-300 flex items-center justify-center w-full bg-amber-200 rounded h-[150px]"
            >
              Recipes Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
