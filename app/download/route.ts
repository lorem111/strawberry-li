import { NextResponse } from "next/server";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.lorem.strawberry";

export async function GET() {
  return NextResponse.redirect(PLAY_STORE_URL, 302);
}
