"use client";
import React from "react";
import addData from "@/actions/add";
import { useState } from "react";

export default function PostForm() {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [views, setViews] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    await addData({ title, body, views }, "posts");
    setTitle("");
    setBody("");
    setViews("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-pink-800 rounded w-full h-[500px] flex items-center justify-center flex-col gap-5"
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        className="w-[80%] rounded p-1"
        placeholder="title"
      />
      <textarea
        className="w-[80%] rounded p-1"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="body..."
      ></textarea>

      <input
        type="text"
        value={views}
        onChange={(e) => setViews(e.target.value)}
        className="w-[80%] rounded p-1"
        placeholder="views..."
      />
      <button type="submit" className="w-[80%] bg-pink-100 p-3 rounded">
        Submit
      </button>
    </form>
  );
}
