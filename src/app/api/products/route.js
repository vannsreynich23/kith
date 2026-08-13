import { NextResponse } from 'next/server';
import { products } from '@/data/products';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}