import { connectDb, disconnectDb } from "@/db/connectDb";
import Post from "@/db/models/post.model";
export async function GET(request, { params }) {
  try {
    await connectDb();
    const { id } = await params;
    const result = await Post.findById({ _id: id });
    if (!result) {
      return new Response("data not found", {
        status: 404,
      });
    }
    return new Response(JSON.stringify(result), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
  } finally {
    disconnectDb();
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDb();
    const { id } = await params;
    const result = await Post.findByIdAndDelete({ _id: id });
    if (!result) {
      return new Response("data not found", {
        status: 404,
      });
    }
    return new Response("post successfully deleted", {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    await disconnectDb();
  } finally {
    await disconnectDb();
  }
}

export async function PATCH(request, { params }) {
  try {
    await connectDb();
    const { id } = await params;
    const body = await request.json();
    const result = await Post.findByIdAndUpdate(id, body, { new: true });
    if (!result) {
      return new Response("data not found", {
        status: 404,
      });
    }
    return new Response(JSON.stringify(result), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    await disconnectDb();
  } finally {
    await disconnectDb();
  }
}
