import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

// GET gold rate
export async function GET() {
  const oneGram = await kv.get('goldrate:oneGram');
  const eightGram = await kv.get('goldrate:eightGram');
  const oneGram18K = await kv.get('goldrate:oneGram18K');

  return NextResponse.json({ oneGram, eightGram, oneGram18K });
}

// POST update gold rate
export async function POST(req) {
  const body = await req.json();
  const { oneGram, eightGram, oneGram18K } = body;

  await kv.set('goldrate:oneGram', oneGram);
  await kv.set('goldrate:eightGram', eightGram);
  await kv.set('goldrate:oneGram18K', oneGram18K);

  return NextResponse.json({ success: true, oneGram, eightGram, oneGram18K });
}
