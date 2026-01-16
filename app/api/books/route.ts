import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const search = req.nextUrl.searchParams.get("search");
  const page = Number(req.nextUrl.searchParams.get("page") ?? 1);
  const limit = Number(req.nextUrl.searchParams.get("limit") ?? 10);

  const skip = (page - 1) * limit;

  const bookWhere: Prisma.BookWhereInput | undefined = search
    ? {
        title: {
          contains: search,
          mode: 'insensitive' as const,
        },
      }
    : undefined;

  const [books, total] = await Promise.all([
    prisma.book.findMany({
      where: bookWhere,
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
    }),
    prisma.book.count({
      where: bookWhere,
    }),
  ]);

  return NextResponse.json({ books, total, page, limit });
}
