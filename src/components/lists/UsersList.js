"use client";
import React, { useState } from "react";
import Link from "next/link";
import deleteData from "@/actions/delete";
import UserModal from "../modals/UserModal";

export default function UsersList({ data }) {
  const [userData, setUserData] = useState(data);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedUser, setEditedUser] = useState(null);
  //  delete handle
  const deleteHandler = async (userId) => {
    await deleteData(userId, "users");
    const newUserData = userData.filter((item) => item._id !== userId);
    setUserData(newUserData);
  };

  // edit user
  const openEditModal = async (userId) => {
    setIsEditModalOpen(true);
    const currentUser = userData.find((item) => item._id === userId);
    setEditedUser(currentUser);
  };

  // handle open edit modal
  const handleOpen = (openState) => {
    setIsEditModalOpen(openState);
  };
  return (
    <>
      <div>
        {data.map((item) => {
          return (
            <div
              key={item._id}
              className="w-full p-4 hover:bg-amber-300 transition-all duration-200 bg-amber-200 rounded py-6 flex flex-col items-center justify-between"
            >
              <h1 className="font-semibold text-fuchsia-900">
                first name:{item.firstName}
              </h1>
              <h1 className="font-semibold text-fuchsia-900">
                last name: {item.lastName}
              </h1>
              <h2 className="font-bold text-pink-700">age: {item.age}</h2>
              <Link
                href={`/users/${item._id}`}
                className="text-center w-full bg-fuchsia-900 text-amber-50 rounded px-3 py-1"
              >
                More...
              </Link>
              <div className="mt-3 w-full gap-5 flex items-center justify-between">
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
          );
        })}
      </div>
      {isEditModalOpen && (
        <div className="bg-amber-200 p-4 fixed top-60 right-96 shadow-2xl z-[1]">
          <div className="w-[400px]">
            <UserModal onOpen={handleOpen} user={editedUser} />
          </div>
        </div>
      )}
    </>
  );
}
