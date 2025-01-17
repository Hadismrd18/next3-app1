"use server";
import { revalidateTag } from "next/cache";
const addData = async (data,path) => {
  await fetch(`http://localhost:3000/api/${path}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "content-type": "application/json" },
  });
  revalidateTag("users");
};

export default addData;
