import { NextResponse } from "next/server";
import { getCourseModules } from "@/lib/lms-db";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const modules = getCourseModules(Number(id));
  return NextResponse.json(modules);
}
