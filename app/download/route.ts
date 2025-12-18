import { NextResponse } from "next/server";

// Update this when releasing new versions
const CURRENT_APK = "/strawberry-voice-0.13.apk";

export async function GET() {
  return NextResponse.redirect(new URL(CURRENT_APK, "https://strawberry.li"), 302);
}
