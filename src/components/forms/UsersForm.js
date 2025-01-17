"use client"

import React, { useState } from 'react'
import addData from "@/actions/add";
import { useRouter } from 'next/navigation';
export default function UsersForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [age, setAge] = useState("");
    const submitHandler = async (e) => {
      e.preventDefault();
      console.log({ firstName, lastName, age });
      await addData({ firstName, lastName, age }, "users");
      setAge("");
      setFirstName("");
      setlastName("");
    };

    
  return (
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
  )
}
