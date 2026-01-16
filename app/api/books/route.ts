import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { search, page, limit } = Object.fromEntries(
    req.nextUrl.searchParams
  );

  const pageNum = parseInt(page as string) || 1;
  const limitNum = parseInt(limit as string) || 10;
  const skip = (pageNum - 1) * limitNum;

  const where: Prisma.BookWhereInput = search
    ? {
        title: {
          contains: search as string,
          mode: Prisma.QueryMode.insensitive,
        },
      }
    : {};

  const [books, total] = await Promise.all([
    prisma.book.findMany({
      where,
      skip,
      take: limitNum,
      orderBy: { createdAt: "desc" },
    }),
    prisma.book.count({ where }),
  ]);

  return NextResponse.json({ books, total });
}
