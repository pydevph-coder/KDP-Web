import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const search = req.nextUrl.searchParams.get("search");
  const page = req.nextUrl.searchParams.get("page");
  const limit = req.nextUrl.searchParams.get("limit");

  const pageNum = Number(page) || 1;
  const limitNum = Number(limit) || 10;
  const skip = (pageNum - 1) * limitNum;

  const where: Prisma.BookWhereInput = search
    ? {
        title: {
          contains: String(search),
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

  return NextResponse.json({
    books,
    total,
    page: pageNum,
    limit: limitNum,
  });
}
