import { PrismaClient } from '@/lib/generated/prisma'
import bcrypt from 'bcryptjs'
import { config } from 'dotenv'
import { resolve } from 'path'
import * as readline from 'readline'

// Load environment variables
config({ path: resolve(__dirname, '../.env') })

async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10)
}

const prisma = new PrismaClient()

// Create readline interface for password input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function question(query: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      resolve(answer)
    })
  })
}

async function main() {
  console.log('=== Password Change Utility ===\n')

  // Check for command line arguments
  const args = process.argv.slice(2)
  let username: string
  let newPassword: string

  if (args.length >= 2) {
    // Command line mode
    username = args[0]
    newPassword = args[1]
    console.log(`Updating password for user: ${username}\n`)
  } else {
    // Interactive mode
    username = await question('Enter username to change password: ')
    
    if (!username) {
      console.error('Username is required')
      process.exit(1)
    }

    // Get new password
    newPassword = await question('Enter new password: ')
    
    if (!newPassword || newPassword.length < 6) {
      console.error('Password must be at least 6 characters')
      process.exit(1)
    }

    // Confirm password
    const confirmPassword = await question('Confirm new password: ')
    
    if (newPassword !== confirmPassword) {
      console.error('Passwords do not match')
      process.exit(1)
    }
  }

  // Check if user exists
  const user = await prisma.user.findUnique({
    where: { username }
  })

  if (!user) {
    console.error(`User "${username}" not found`)
    process.exit(1)
  }

  if (newPassword.length < 6) {
    console.error('Password must be at least 6 characters')
    process.exit(1)
  }

  console.log(`\nFound user: ${user.name || user.username} (${user.role})`)

  // Hash and update password
  const hashedPassword = await hashPassword(newPassword)
  
  await prisma.user.update({
    where: { username },
    data: { password: hashedPassword }
  })

  console.log(`\n✅ Password updated successfully for user "${username}"`)
}

main()
  .catch((e) => {
    console.error('Error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
    rl.close()
  })

