import { PrismaClient } from '@/lib/generated/prisma'
import bcrypt from 'bcryptjs'
import { config } from 'dotenv'
import { resolve } from 'path'

// Load environment variables
config({ path: resolve(__dirname, '../.env') })

const prisma = new PrismaClient()

async function testLogin(username: string, password: string) {
  console.log(`\n=== Testing Login for: ${username} ===\n`)

  try {
    // Find user
    const user = await prisma.user.findUnique({
      where: { username }
    })

    if (!user) {
      console.log('❌ User not found!')
      return false
    }

    console.log(`✅ User found: ${user.name || user.username} (${user.role})`)

    // Test password
    const isValid = await bcrypt.compare(password, user.password)
    
    if (isValid) {
      console.log('✅ Password is CORRECT')
      return true
    } else {
      console.log('❌ Password is INCORRECT')
      console.log('\n💡 Try these default passwords:')
      console.log('   - admin: admin123')
      console.log('   - student1: student123')
      console.log('   - sk01: student123')
      return false
    }
  } catch (error) {
    console.error('❌ Error:', error)
    return false
  }
}

async function main() {
  const args = process.argv.slice(2)
  
  if (args.length >= 2) {
    const username = args[0]
    const password = args[1]
    await testLogin(username, password)
  } else {
    console.log('Usage: tsx scripts/test-login.ts <username> <password>')
    console.log('\nExample:')
    console.log('  tsx scripts/test-login.ts admin admin123')
    console.log('  tsx scripts/test-login.ts student1 student123')
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

