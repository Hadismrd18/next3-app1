import { connectDb, disconnectDb } from "@/db/connectDb";
import User from "@/db/models/user.model";

export async function GET() {
  try {
    await connectDb();
    const result = await User.find({});
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

export async function POST(request) {
  try {
    await connectDb();
    const body = await request.json();
    const result = await User.create(body);
    if (!result) {
      return new Response("data not found", {
        status: 404,
      });
    }
    return new Response(JSON.stringify(body), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
  } finally {
    disconnectDb();
  }
}
