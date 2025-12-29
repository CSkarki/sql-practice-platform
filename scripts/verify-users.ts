import { PrismaClient } from '@/lib/generated/prisma'
import { config } from 'dotenv'
import { resolve } from 'path'

// Load environment variables
config({ path: resolve(__dirname, '../.env') })

const prisma = new PrismaClient()

async function main() {
  console.log('=== Verifying Users in Database ===\n')

  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        role: true,
        name: true,
        email: true,
        createdAt: true
      }
    })

    if (users.length === 0) {
      console.log('❌ No users found in database!')
      console.log('\nRun: npm run db:seed to create initial users')
      process.exit(1)
    }

    console.log(`✅ Found ${users.length} user(s):\n`)
    
    users.forEach((user, index) => {
      console.log(`${index + 1}. Username: ${user.username}`)
      console.log(`   Role: ${user.role}`)
      console.log(`   Name: ${user.name || 'N/A'}`)
      console.log(`   Email: ${user.email || 'N/A'}`)
      console.log(`   Created: ${user.createdAt.toLocaleString()}`)
      console.log('')
    })

    console.log('=== Default Passwords ===')
    console.log('Admin: admin / admin123')
    console.log('Student 1: student1 / student123')
    console.log('Student 2: sk01 / student123')
    console.log('\n⚠️  If you changed passwords, use the new passwords!')
    
  } catch (error) {
    console.error('❌ Error accessing database:', error)
    process.exit(1)
  }
}

main()
  .catch((e) => {
    console.error('Error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

