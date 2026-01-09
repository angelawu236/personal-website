import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectToDatabase } from "@/lib/mongoose";
import { Project } from "@/lib/models/Projects";

type Ctx = { params: { id: string } };
const ok = (id: string) => mongoose.Types.ObjectId.isValid(id);

export async function GET(_req: Request, { params }: Ctx) {
  if (!ok(params.id)) return NextResponse.json({ error: "bad id" }, { status: 400 });

  await connectToDatabase();
  const doc = await Project.findById(params.id);
  if (!doc) return NextResponse.json({ error: "not found" }, { status: 404 });

  return NextResponse.json(doc);
}

export async function PUT(req: Request, { params }: Ctx) {
  if (!ok(params.id)) return NextResponse.json({ error: "bad id" }, { status: 400 });

  await connectToDatabase();
  const body = await req.json();
  const doc = await Project.findByIdAndUpdate(params.id, body, { new: true, runValidators: true });
  if (!doc) return NextResponse.json({ error: "not found" }, { status: 404 });

  return NextResponse.json(doc);
}

export async function DELETE(_req: Request, { params }: Ctx) {
  if (!ok(params.id)) return NextResponse.json({ error: "bad id" }, { status: 400 });

  await connectToDatabase();
  const doc = await Project.findByIdAndDelete(params.id);
  if (!doc) return NextResponse.json({ error: "not found" }, { status: 404 });

  return NextResponse.json({ ok: true });
}
