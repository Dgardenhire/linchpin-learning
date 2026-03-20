import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { error: "Worksheets require authentication." },
    { status: 401 }
  );
}

export async function POST() {
  return NextResponse.json(
    { error: "Worksheets require authentication." },
    { status: 401 }
  );
}
