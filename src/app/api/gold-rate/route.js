import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

// GET gold rate
export async function GET() {
  const oneGram = await kv.get('goldrate:oneGram');
  const eightGram = await kv.get('goldrate:eightGram');

  return NextResponse.json({ oneGram, eightGram });
}

// POST update gold rate
export async function POST(req) {
  const body = await req.json();
  const { oneGram, eightGram } = body;

  await kv.set('goldrate:oneGram', oneGram);
  await kv.set('goldrate:eightGram', eightGram);

  return NextResponse.json({ success: true, oneGram, eightGram });
}
