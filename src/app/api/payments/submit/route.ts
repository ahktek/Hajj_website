import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { registrationId, amount, method, transactionId, receiptUrl } = await request.json();

    if (!registrationId || !amount || !method || !transactionId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // In a real app, we would get the userId from the session
    // For MVP, we'll just use a placeholder or look it up from the registration
    const registration = await db.preRegistration.findUnique({
      where: { id: registrationId },
    });

    if (!registration) {
      return NextResponse.json({ error: 'Registration not found' }, { status: 404 });
    }

    // Save payment to database
    const payment = await db.payment.create({
      data: {
        registrationId,
        userId: registration.userId,
        amount,
        method,
        transactionId,
        receiptUrl,
        status: 'PENDING',
      },
    });

    return NextResponse.json({ success: true, payment });
  } catch (error) {
    console.error('Payment submission error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
