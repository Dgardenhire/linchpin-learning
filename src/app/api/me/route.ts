import { NextResponse } from "next/server";

export async function GET() {
  // No auth in catalog mode
  return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
}
