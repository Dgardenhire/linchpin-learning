import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { error: "Registration coming soon. Browse the catalog to explore courses." },
    { status: 503 }
  );
}
