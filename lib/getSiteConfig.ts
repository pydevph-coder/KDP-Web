import { prisma } from "@/lib/prisma";

export async function getSiteConfig() {
  const config = await prisma.siteConfig.findFirst();
  // const config = await prisma.siteConfig.findFirst();
  console.log("SiteConfig:", config);
  // Return default values if no config exists
  if (!config) {
    return {
      id: 'default',
      siteTitle: 'Faith-Based Books & Guided Journals',
      siteDescription: 'Discover faith-based books and guided journals for mental wellness, written by a licensed guidance counselor.',
      metaImageUrl: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      pagination: 10,
    };
  }
  
  return config;
}
