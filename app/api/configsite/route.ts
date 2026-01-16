import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const config = await prisma.siteConfig.findFirst();
  console.log("SiteConfig:", config);
  return NextResponse.json(config ?? {});
}