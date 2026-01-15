import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function createPrismaClient(): PrismaClient {
  // During build, Prisma Client needs DATABASE_URL but won't actually connect
  // Ensure DATABASE_URL is set in Vercel environment variables
  if (!process.env.DATABASE_URL && process.env.NEXT_PHASE === 'phase-production-build') {
    console.warn('DATABASE_URL not found during build - Prisma routes will fail at runtime')
  }
  
  return new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })
}

export const prisma: PrismaClient =
  globalForPrisma.prisma ??
  (typeof window === 'undefined' ? createPrismaClient() : ({} as PrismaClient))

if (process.env.NODE_ENV !== 'production' && typeof window === 'undefined') {
  globalForPrisma.prisma = prisma
}

