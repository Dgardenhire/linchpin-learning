import { NextResponse } from "next/server";
import { getCourses } from "@/lib/lms-db";

export async function GET() {
  return NextResponse.json(getCourses());
}
