import { NextResponse } from "next/server";
import { getInstructorBySlug } from "@/lib/lms-db";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const result = getInstructorBySlug(slug);
  if (!result) {
    return NextResponse.json(
      { error: "Instructor not found" },
      { status: 404 }
    );
  }
  return NextResponse.json(result);
}
