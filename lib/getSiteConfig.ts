import { prisma } from "@/lib/prisma";

export async function getSiteConfig() {
  try {
    const config = await prisma.siteConfig.findFirst();
    console.log("SiteConfig:", config);
    
    // Return default values if no config exists
    if (!config) {
      return {
        id: 'default',
        siteTitle: 'Faith-Based Books & Guided Journals',
        siteDescription: 'Discover faith-based books and guided journals for mental wellness, written by a licensed guidance counselor.',
        metaImageUrl: 'https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UY327_FMwebp_QL65_.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        pagination: 10,
      };
    }
    
    // If config exists but metaImageUrl is not set, use the default image
    if (config && !config.metaImageUrl) {
      return {
        ...config,
        metaImageUrl: 'https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UY327_FMwebp_QL65_.jpg',
      };
    }
    
    return config;
  } catch (error) {
    // Handle database connection errors gracefully
    console.error('Failed to fetch site config from database:', error);
    
    // Return default values when database is unavailable
    return {
      id: 'default',
      siteTitle: 'Faith-Based Books & Guided Journals',
      siteDescription: 'Discover faith-based books and guided journals for mental wellness, written by a licensed guidance counselor.',
      metaImageUrl: 'https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UY327_FMwebp_QL65_.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
      pagination: 10,
    };
  }
}
