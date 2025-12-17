import { NextRequest, NextResponse } from "next/server";
import { createLead } from "@/lib/db";
import { sendEmail } from "@/lib/email";
import { newsletterEmail } from "@/lib/emails/newsletter";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const leadId = await createLead(email, "newsletter");

    await sendEmail({
      to: email,
      subject: "Welcome to VoiceAssist!",
      html: newsletterEmail(),
    });

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed",
      id: leadId,
    });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    );
  }
}
