import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { error: "Progress tracking requires authentication." },
    { status: 401 }
  );
}
