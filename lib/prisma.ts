import { PrismaClient } from '@/lib/generated/prisma'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Create Prisma Client
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}

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

// In development, log connection attempts for debugging
if (process.env.NODE_ENV === 'development') {
  prisma.$connect()
    .then(() => {
      console.log('✅ Database connected successfully (dev)')
    })
    .catch((error) => {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      if (errorMessage.includes("Can't reach database server")) {
        console.error('❌ Database connection failed: Azure SQL Server firewall may be blocking your IP')
        console.error('💡 Solution: Add your IP address to Azure SQL Server firewall rules')
        console.error('   Or enable "Allow Azure services" in Azure Portal')
      } else {
        console.error('❌ Database connection failed:', errorMessage)
      }
    })
}

