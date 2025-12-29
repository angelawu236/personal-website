import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";
import { Project } from "@/lib/models/Projects";

export async function GET() {
  await connectToDatabase();
  const data = await Project.find().sort({ createdAt: -1 });
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  await connectToDatabase();
  const body = await req.json();
  const created = await Project.create(body);
  return NextResponse.json(created, { status: 201 });
}
