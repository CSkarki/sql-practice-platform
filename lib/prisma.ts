import { PrismaClient } from '@/lib/generated/prisma'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// Handle connection errors gracefully
prisma.$on('error' as never, (e: any) => {
  console.error('Prisma Client Error:', e)
})

// Test database connection on startup in production
if (process.env.NODE_ENV === 'production') {
  prisma.$connect()
    .then(() => {
      console.log('✅ Database connected successfully')
    })
    .catch((error) => {
      console.error('❌ Database connection failed:', error)
    })
}

