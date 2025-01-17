import { connection, connect, disconnect } from "mongoose";

const connectDb = async () => {
  if (connection.readyState === 1) {
    return console.log("already connected to database");
  }
  try {
    await connect(process.env.BASE_URI);
    console.log("connected to data base");
  } catch (error) {
    console.log(error);
  }
};

const disconnectDb = async () => {
  try {
    await disconnect(process.env.BASE_URI);
  } catch (error) {
    console.log(error);
  }
};

export { connectDb, disconnectDb };
