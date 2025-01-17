import { connectDb, disconnectDb } from "@/db/connectDb";
import User from "@/db/models/user.model";
export async function GET(request, { params }) {
  try {
    await connectDb();
    const { id } = await params;
    const result = await User.findById({ _id: id });

    if (!result) {
      return new Response("data not found", {
        status: 404,
        headers: { "Content-Type": "application/json" },
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
    const { id } = params;
    const result = await User.findByIdAndDelete({ _id: id });
    if (!result) {
      return new Response("data not found", {
        status: 404,
      });
    }
    return new Response("recipe successfully deleted", {
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
    const { id } = params;
    const body = await request.json();
    const result = await User.findByIdAndUpdate(id, body, { new: true });
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
