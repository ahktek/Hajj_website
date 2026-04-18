import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST() {
  try {
    const lead = await db.lead.create({
      data: {
        name: "Test User " + new Date().toLocaleTimeString(),
        phone: "01712345678",
        type: "DEBUG",
        tags: ["Test"],
        notes: "Created via debug page test button",
      },
    });
    return NextResponse.json({ success: true, lead });
  } catch (error: any) {
    console.error('Debug write error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
