import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { error: "Enrollment coming soon." },
    { status: 503 }
  );
}
