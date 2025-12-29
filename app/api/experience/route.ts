import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";
import { Experience } from "@/lib/models/Experience";

export async function GET() {
  await connectToDatabase();
  const data = await Experience.find().sort({ createdAt: -1 });
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  await connectToDatabase();
  const body = await req.json();
  const created = await Experience.create(body);
  return NextResponse.json(created, { status: 201 });
}
