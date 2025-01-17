"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import patchData from "@/actions/patch";
export default function PostModal({ post, onOpen }) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const [views, setViews] = useState(post.views);

  const submitHandler = async (e) => {
    e.preventDefault();
    await patchData({ title, body, views }, post._id, "posts");
    setTitle("");
    setBody("");
    setViews("");
    setIsModalOpen(false);
    console.log(isModalOpen);
  };
  useEffect(() => {
    onOpen(isModalOpen);
  }, [isModalOpen]);
  return (
    <>
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
    </>
  );
}
