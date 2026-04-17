import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { name, phone } = await request.json();

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 });
    }

    // BD Phone validation
    const phoneRegex = /^01[3-9]\d{8}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json({ error: 'Invalid BD phone format' }, { status: 400 });
    }

    // Save lead to database
    const lead = await db.lead.create({
      data: {
        name,
        phone,
        type: 'CALLBACK',
        tags: ['New', 'Website'],
        notes: 'Requested via website call-back form',
      },
    });

    return NextResponse.json({ success: true, lead });
  } catch (error) {
    console.error('Lead generation error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
