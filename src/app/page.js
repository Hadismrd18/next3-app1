import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" w-[100vw] h-[100vh]">
      <Navbar />

      <div className="w-[100vw] px-20 mt-[200px] flex flex-col gap-5">
        <Link
          href="/users"
          className="font-bold text-2xl text-fuchsia-950 hover:scale-105 transition-all duration-200 hover:bg-amber-300 flex items-center justify-center w-full bg-amber-200 rounded h-[200px]"
        >
          Users Page
        </Link>
        <Link
          href="/posts"
          className="font-bold text-2xl text-fuchsia-950 hover:scale-105 transition-all duration-200 hover:bg-amber-300 flex items-center justify-center w-full bg-amber-200 rounded h-[200px]"
        >
          Posts Page
        </Link>
        <Link
          href="/recipes"
          className="font-bold text-2xl text-fuchsia-950 hover:scale-105 transition-all duration-200 hover:bg-amber-300 flex items-center justify-center w-full bg-amber-200 rounded h-[200px]"
        >
          Recipes Page
        </Link>
      </div>
    </div>
  );
}
