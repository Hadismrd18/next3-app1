"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import patchData from "@/actions/patch";
import { useRouter } from "next/navigation";
export default function UserModal({ user, onOpen }) {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(true);

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setlastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, age });
    await patchData({ firstName, lastName, age }, user._id,"users");
    setAge("");
    setFirstName("");
    setlastName("");
    setIsModalOpen(false)
    router.refresh()
  };

  
  // close modal
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
      type="text"
      className="w-[80%] rounded p-1"
      placeholder="first name"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
    />
    <input
      type="text"
      className="w-[80%] rounded p-1"
      placeholder="last name"
      value={lastName}
      onChange={(e) => setlastName(e.target.value)}
    />
    <input
      type="text"
      className="w-[80%] rounded p-1"
      placeholder="age"
      value={age}
      onChange={(e) => setAge(e.target.value)}
    />
    <button type="submit" className="w-[80%] bg-pink-100 p-3 rounded">
      Submit
    </button>
  </form>
    </>
  );
}
