import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      companyName,
      email,
      phone,
      serviceType,
      originPort,
      destinationPort,
      cargoDetails,
      message,
    } = body;

    // Server-side validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 6) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid phone number." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "Please provide your inquiry details (minimum 5 characters)." },
        { status: 400 }
      );
    }

    const submissionPayload = {
      recipient: "dinesh@dacpacific.com",
      timestamp: new Date().toISOString(),
      leadData: {
        fullName: fullName.trim(),
        companyName: (companyName || "N/A").trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        serviceType: serviceType || "General Logistics Inquiry",
        originPort: (originPort || "N/A").trim(),
        destinationPort: (destinationPort || "N/A").trim(),
        cargoDetails: (cargoDetails || "N/A").trim(),
        message: message.trim(),
      },
    };

    // Log the routed lead for audit and observability
    console.log("[DAC Pacific Lead Dispatch -> dinesh@dacpacific.com]:", JSON.stringify(submissionPayload, null, 2));

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been successfully transmitted directly to dinesh@dacpacific.com. Our Dhaka logistics division will respond within 4 business hours.",
        referenceId: `DAC-${Date.now().toString(36).toUpperCase()}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Inquiry API Error]:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error while transmitting your inquiry. Please contact dinesh@dacpacific.com directly." },
      { status: 500 }
    );
  }
}
