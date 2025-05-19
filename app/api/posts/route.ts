// app/api/posts/route.ts

import { PrismaClient } from '../../generated/prisma'; 
import { NextRequest, NextResponse } from 'next/server';

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

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const take = parseInt(searchParams.get('take') || '5');
    const skip = parseInt(searchParams.get('skip') || '0');
    const category = searchParams.get('category');

    const posts = await prisma.post.findMany({
      take,
      skip,
      orderBy: {
        publishedAt: 'desc',
      },
      where: category
        ? {
            category: {
              equals: category,
              // mode: 'insensitive',
            },
          }
        : undefined,
    });

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}
