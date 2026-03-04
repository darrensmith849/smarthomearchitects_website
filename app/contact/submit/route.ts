import { NextResponse } from "next/server";
import { Resend } from "resend";
import { leadFormSchema } from "@/lib/contact";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

function toStringValue(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value : "";
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const payload = {
    fullName: toStringValue(formData.get("fullName")),
    email: toStringValue(formData.get("email")),
    phone: toStringValue(formData.get("phone")),
    location: toStringValue(formData.get("location")),
    projectStage: toStringValue(formData.get("projectStage")),
    scope: toStringValue(formData.get("scope")),
    timeline: toStringValue(formData.get("timeline")),
    budgetRange: toStringValue(formData.get("budgetRange")) || undefined,
    message: toStringValue(formData.get("message")),
    website: toStringValue(formData.get("website")),
  };

  if (payload.website) {
    return NextResponse.redirect(new URL("/contact?status=success", request.url), { status: 303 });
  }

  const parsed = leadFormSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.redirect(new URL("/contact?status=error&error=validation", request.url), {
      status: 303,
    });
  }

  const lead = parsed.data;

  try {
    if (resend && process.env.CONTACT_TO_EMAIL) {
      await resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL ?? "Smart Home Architects <onboarding@resend.dev>",
        to: process.env.CONTACT_TO_EMAIL,
        subject: `New Discovery Call Enquiry - ${lead.fullName}`,
        replyTo: lead.email,
        text: [
          `Name: ${lead.fullName}`,
          `Email: ${lead.email}`,
          `Phone: ${lead.phone}`,
          `Location: ${lead.location}`,
          `Project Stage: ${lead.projectStage}`,
          `Scope: ${lead.scope}`,
          `Timeline: ${lead.timeline}`,
          `Budget: ${lead.budgetRange ?? "Not provided"}`,
          "",
          "Message:",
          lead.message,
        ].join("\n"),
      });
    } else {
      console.info("Lead submission (email not configured):", lead);
    }

    return NextResponse.redirect(new URL("/contact?status=success", request.url), { status: 303 });
  } catch (error) {
    console.error("Lead submission failed", error);
    return NextResponse.redirect(new URL("/contact?status=error&error=server", request.url), {
      status: 303,
    });
  }
}
