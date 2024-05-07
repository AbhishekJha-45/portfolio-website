import { NextResponse } from "next/server";
import { connectToDatabase } from "@lib/db";
export async function POST(req) {
  const formData = await req.json();
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailRegex.test(formData.email);
  if (!isValidEmail) {
    return;
  }
  try {
    const db = await connectToDatabase();
    const collection = db.collection("formdata");
    const countMessages = await collection.countDocuments({
      email: formData.email,
    });
    if (countMessages >= 5) {
      return NextResponse.json(
        { message: "You Have Reached maximum email Limits" },
        { status: 429 }
      );
    }
    const result = await collection.insertOne({
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      timestamp: new Date(),
    });
    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (err) {
    throw new Error("Invalid Details please Retry :(", err);
  }
}
