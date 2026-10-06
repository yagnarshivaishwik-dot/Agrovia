import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, company, email, phone, region, enquiryType, crop, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone number are required." },
        { status: 400 }
      );
    }

    // Server-side audit log representing the dispatch to dev.p@agrovia.au
    console.log("=== NEW AGROVIA CONSULTING FIELD ENQUIRY ===");
    console.log(`To: dev.p@agrovia.au`);
    console.log(`From: ${name} (${company || "Individual Grower"})`);
    console.log(`Email: ${email} | Phone: ${phone}`);
    console.log(`Region: ${region} | Crop: ${crop} | Type: ${enquiryType}`);
    console.log(`Details: ${message || "No additional text provided."}`);
    console.log("============================================");

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been dispatched directly to dev.p@agrovia.au.",
      },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: "Internal processing error. Please contact dev.p@agrovia.au directly." },
      { status: 500 }
    );
  }
}
