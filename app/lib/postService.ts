import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export async function getAllPosts() {
  return await prisma.post.findMany({
    orderBy: { publishedAt: 'desc' }
  });
}
