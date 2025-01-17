import { connectDb, disconnectDb } from "@/db/connectDb";
import Post from "@/db/models/post.model";

export async function GET() {
  try {
    await connectDb();
    const result = await Post.find({});
    if (!result) {
      return new Response("data not found", {
        status: 404,
      });
    }
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.log(error);
  } finally {
    await disconnectDb();
  }
}

export async function POST(request) {
  try {
    await connectDb();
    const body = await request.json();
    const result = await Post.create(body);
    return new Response(JSON.stringify(result), { status: 201 });
  } catch (error) {
    console.log(error);
  } finally {
    await disconnectDb();
  }
}
