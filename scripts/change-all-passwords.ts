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
  console.log('=== Bulk Password Update ===\n')

  // Update admin password
  const adminPassword = await hashPassword('admin123') // Change this to your desired password
  await prisma.user.updateMany({
    where: { username: 'admin' },
    data: { password: adminPassword }
  })
  console.log('✅ Admin password updated')

  // Update student1 password
  const student1Password = await hashPassword('student123') // Change this to your desired password
  await prisma.user.updateMany({
    where: { username: 'student1' },
    data: { password: student1Password }
  })
  console.log('✅ Student1 password updated')

  // Update sk01 password
  const sk01Password = await hashPassword('student123') // Change this to your desired password
  await prisma.user.updateMany({
    where: { username: 'sk01' },
    data: { password: sk01Password }
  })
  console.log('✅ sk01 password updated')

  console.log('\n✅ All passwords updated successfully!')
  console.log('\n⚠️  IMPORTANT: Update the passwords in this script file before running!')
}

main()
  .catch((e) => {
    console.error('Error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

