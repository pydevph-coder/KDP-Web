import { prisma } from "@/lib/prisma";

export async function getSiteConfig() {
  return prisma.siteConfig.findFirst();
}
