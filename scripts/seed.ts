import { PrismaClient } from '@/lib/generated/prisma'
import bcrypt from 'bcryptjs'
import { config } from 'dotenv'
import { resolve } from 'path'

// Load environment variables
config({ path: resolve(__dirname, '../.env') })

async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10)
}

const prisma = new PrismaClient()

async function main() {
  // Create admin user
  const adminPassword = await hashPassword('admin123')
  const admin = await prisma.user.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      password: adminPassword,
      role: 'admin',
      name: 'Admin User',
      email: 'admin@example.com'
    }
  })

  // Create student users
  const student1Password = await hashPassword('student123')
  const student1 = await prisma.user.upsert({
    where: { username: 'student1' },
    update: {},
    create: {
      username: 'student1',
      password: student1Password,
      role: 'student',
      name: 'John Student',
      email: 'student1@example.com'
    }
  })

  // Delete old student2 if it exists (since we're changing to sk01)
  const existingStudent2 = await prisma.user.findUnique({
    where: { username: 'student2' }
  })
  
  if (existingStudent2) {
    await prisma.user.delete({
      where: { username: 'student2' }
    })
    console.log('Deleted old student2 user')
  }
  
  // Create or update sk01 user
  const student2Password = await hashPassword('student123')
  const student2 = await prisma.user.upsert({
    where: { username: 'sk01' },
    update: {
      password: student2Password,
      email: 'sk01@example.com'
    },
    create: {
      username: 'sk01',
      password: student2Password,
      role: 'student',
      name: 'Jane Student',
      email: 'sk01@example.com'
    }
  })

  console.log('Seeded users:')
  console.log('Admin:', admin.username)
  console.log('Students:', student1.username, student2.username)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

