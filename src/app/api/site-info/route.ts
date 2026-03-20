import { NextResponse } from "next/server";
import { getSiteInfo } from "@/lib/lms-db";

export async function GET() {
  return NextResponse.json(getSiteInfo());
}
