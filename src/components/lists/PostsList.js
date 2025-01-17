"use client";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa6";
import Link from "next/link";
import deleteData from "@/actions/delete";

import PostModal from "../modals/PostModal";
export default function PostsList({ data }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [postData, setPostData] = useState(data);
  const [editedPost, setEditedPost] = useState(null);
  // delete post
  const deleteHandler = async (postId) => {
    await deleteData(postId, "posts");
    const newPostData = postData.filter((item) => item._id !== postId);
    setPostData(newPostData);
  };
  // edit post
  const openEditModal = async (postId) => {
    setIsEditModalOpen(true);
    const currentPost = postData.find((item) => item._id === postId);
    setEditedPost(currentPost);
  };
  // handle open edit modal
  const handleOpen = (openState) => {
    console.log(openState);
    setIsEditModalOpen(openState);
  };
  return (
    <>
      {" "}
      <div className="flex flex-col items-center gap-5">
        {postData.map((item) => {
          return (
            <div
              key={item._id}
              className="w-full p-4 hover:bg-amber-300 transition-all duration-200 bg-amber-200 rounded py-6 flex flex-col items-center justify-between"
            >
              <h1 className="font-semibold text-fuchsia-900">{item.title}</h1>
              <p className="font-bold text-pink-700">{item.body}</p>
              <div className="w-full flex flex-col items-center gap-2">
                <div className="w-full bg-pink-900 flex flex-col items-start justify-center rounded p-1">
                  <div className="flex items-center justify-center gap-1">
                    <FaEye className="text-white" />
                    <span className="font-bold text-white ">
                      views: {item.views}
                    </span>
                  </div>
                </div>
                <Link
                  href={`/posts/${item._id}`}
                  className="w-full text-center bg-fuchsia-900 text-amber-50 rounded px-3 py-1"
                >
                  More...
                </Link>
                <div className="w-full gap-5 flex items-center justify-between">
                  <button
                    onClick={() => deleteHandler(item._id)}
                    className="w-[50%] bg-pink-950 text-white rounded px-3 py-1"
                  >
                    DELETE
                  </button>
                  <button
                    onClick={() => openEditModal(item._id)}
                    className="w-[50%] bg-fuchsia-950 text-white rounded px-3 py-1"
                  >
                    EDIT
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {isEditModalOpen && (
        <div className="bg-amber-200 p-4 fixed top-60 right-96 shadow-2xl z-[1]">
          <div className="w-[400px]">
            <PostModal onOpen={handleOpen} post={editedPost} />
          </div>
        </div>
      )}
    </>
  );
}
