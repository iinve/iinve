import fs from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

const filePath = path.join(process.cwd(), 'gold-rate.json');

// GET = fetch gold rate
export async function GET() {
  const data = fs.readFileSync(filePath, 'utf-8');
  const goldRate = JSON.parse(data);
  return NextResponse.json(goldRate);
}

// POST = update both 1g and 8g rates
export async function POST(req) {
  const body = await req.json();
  const newRate = {
    oneGram: body.oneGram,
    eightGram: body.eightGram,
  };

  fs.writeFileSync(filePath, JSON.stringify(newRate, null, 2));
  return NextResponse.json({ success: true, ...newRate });
}