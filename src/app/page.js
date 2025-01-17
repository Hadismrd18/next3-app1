import Navbar from "@/components/Navbar";
import PageList from "@/components/PageList";
import Link from "next/link";

export const metadata = {
  title: "this is the page title",
  description: "this is the page description",
};

export default function Home() {
  return (
    <div className=" w-[100vw] h-[100vh]">
      <Navbar />

      <PageList />
    </div>
  );
}
