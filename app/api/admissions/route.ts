import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { parentName, childName, phone, message } = await request.json();
  const admission = await prisma.admission.create({
    data: { parentName, childName, phone, message },
  });
  return NextResponse.json(admission);
}
