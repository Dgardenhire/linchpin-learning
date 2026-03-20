import { NextResponse } from "next/server";
import { getInstructors } from "@/lib/lms-db";

export async function GET() {
  return NextResponse.json(getInstructors());
}
