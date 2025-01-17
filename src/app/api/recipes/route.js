import { connectDb, disconnectDb } from "@/db/connectDb";
import Recipe from "@/db/models/recipe.model";

export async function GET() {
  try {
    await connectDb();
    const result = await Recipe.find({});
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
    await disconnectDb();
  }
}

export async function POST(request) {
  try {
    await connectDb();
    const body = await request.json();
    const result = await Recipe.create(body);
    return new Response(JSON.stringify(result), {
      status: 201,
    });
  } catch (error) {
    console.log(error);
  } finally {
    await disconnectDb();
  }
}
