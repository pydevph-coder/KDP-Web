import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function createPrismaClient(): PrismaClient {
  try {
    return new PrismaClient({
      log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    })
  } catch (error) {
    // If Prisma fails to initialize (e.g., missing DATABASE_URL during build),
    // log a warning but don't throw - routes marked as force-dynamic won't execute during build
    if (process.env.NEXT_PHASE === 'phase-production-build') {
      console.warn('Prisma Client initialization failed during build. This is expected if DATABASE_URL is not set.')
      console.warn('Ensure DATABASE_URL is configured in Vercel environment variables.')
      // Return a stub that will fail gracefully at runtime
      return {} as PrismaClient
    }
    throw error
  }
}

export const prisma: PrismaClient =
  globalForPrisma.prisma ??
  (typeof window === 'undefined' ? createPrismaClient() : ({} as PrismaClient))

if (process.env.NODE_ENV !== 'production' && typeof window === 'undefined') {
  globalForPrisma.prisma = prisma
}

