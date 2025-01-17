"use server";

import { revalidateTag } from "next/cache";
export default async function deleteData(id, path) {
  await fetch(`http://localhost:3000/api/${path}/${id}`, {
    method: "DELETE",
    headers: { "content-type": "application/json" },
  });
  revalidateTag(path);
}
