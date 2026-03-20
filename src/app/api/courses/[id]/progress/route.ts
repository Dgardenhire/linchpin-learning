import { NextResponse } from "next/server";

export async function GET() {
  // No auth in catalog mode — return empty progress
  return NextResponse.json({
    completed_lessons: 0,
    total_lessons: 0,
    percent: 0,
  });
}
