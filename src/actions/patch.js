"use server";
import { revalidateTag } from "next/cache";

const patchData = async (data, id, path) => {
  await fetch(`http://localhost:3000/api/${path}/${id}`, {
    method: "PATCH",
    headers: { "content-type": "application-json" },
    body: JSON.stringify(data),
  });
};

export default patchData;
