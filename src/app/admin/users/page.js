import UsersForm from "@/components/forms/UsersForm";
import UsersList from "@/components/lists/UsersList";
import React from "react";

export default async function page() {

  let data = null
  const response = await fetch("http://localhost:3000/api/users");
  if (response) {
    console.log(response)
     data = await response.json();
  }else{
    console.error("no data was fetched")
  }

  console.log(data);
  return (
    <div className="w-[60%] flex flex-col items-center justify-between">
      <UsersForm />
      <div className="w-full mt-10 flex flex-col gap-5 bg-pink-800 p-1">
        <UsersList data={data} />
      </div>
    </div>
  );
}
