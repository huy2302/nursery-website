// app/api/posts/route.ts

import { PrismaClient } from '../../generated/prisma'; 
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { title, content } = await req.json();

  try {
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
      },
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Không thể tạo bài viết' }, { status: 500 });
  }
}

export async function GET() {
  const posts = await prisma.post.findMany();
  return NextResponse.json(posts);
}
