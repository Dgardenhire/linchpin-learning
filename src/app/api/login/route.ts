import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { error: "Authentication coming soon. Browse the catalog to explore courses." },
    { status: 503 }
  );
}
