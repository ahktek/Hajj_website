import { NextResponse } from 'next/server';
import { PaymentService } from '@/services/payment.mock';
import { SmsService } from '@/services/sms.mock';
import { db } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, passport, nid, package: packageSlug } = body;

    // Validate BD phone number again on the server side
    const phoneRegex = /^01[3-9]\d{8}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json({ error: "Invalid BD phone format" }, { status: 400 });
    }

    // 1. Fetch package details
    // In MVP, we might mock this or use DB. Let's assume we have them in DB or use fixed values.
    // Assuming standard MVP fixed prices for now if DB is empty:
    const prices: Record<string, number> = {
      'economy': 450000,
      'silver': 600000,
      'gold': 850000
    };
    
    const amount = prices[packageSlug] || 450000;

    // 2. Call Mock Payment Service to generate invoice
    const invoice = await PaymentService.generateInvoice(amount, `PRE-REG-${phone}`);

    // 3. Call Mock SMS Service
    const smsMsg = `Dear ${fullName}, your pre-registration for Hajj (${packageSlug} package) is received. Invoice: ${invoice.invoiceId}.`;
    await SmsService.sendConfirmationSms(phone, smsMsg);

    // 4. Ideally, save to DB using Prisma here
    // await db.preRegistration.create({ ... })

    return NextResponse.json({ 
      success: true, 
      message: "Pre-registration successful",
      invoice: invoice
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
