# How to Change Passwords

This guide explains multiple methods to change passwords for admin and student users in the SQL Practice Platform.

## Quick Start

**Easiest Method - Interactive Script:**
```bash
npm run password:change
```

**Fast Method - Command Line:**
```bash
tsx scripts/change-password.ts admin MyNewPassword123!
```

---

## Method 1: Interactive Password Change Script ⭐ (Recommended)

The easiest and safest way to change a password. The script will guide you through the process with prompts.

### Usage

```bash
npm run password:change
```

### What It Does

1. Prompts for the username
2. Prompts for the new password
3. Confirms the password (to prevent typos)
4. Validates the password (minimum 6 characters)
5. Updates the password in the database

### Example

```bash
$ npm run password:change
=== Password Change Utility ===

Enter username to change password: admin
Enter new password: MyNewSecure!
Confirm new password: MyNewSecure!

Found user: Admin User (admin)

✅ Password updated successfully for user "admin"
```

### Advantages

- ✅ Safe - confirms password before updating
- ✅ User-friendly - clear prompts and feedback
- ✅ Validates input - checks password length
- ✅ Shows user info - confirms you're updating the right user

---

## Method 2: Command Line (Quick)

For faster password changes when you know the exact username and password.

### Usage

```bash
tsx scripts/change-password.ts <username> <new-password>
```

### Examples

**Change admin password:**
```bash
tsx scripts/change-password.ts admin MySecurePassword123!
```

**Change student password:**
```bash
tsx scripts/change-password.ts student1 NewStudentPass456!
```

**Change sk01 password:**
```bash
tsx scripts/change-password.ts sk01 SecurePass789!
```

### Advantages

- ✅ Fast - no interactive prompts
- ✅ Scriptable - can be automated
- ✅ Direct - single command

### ⚠️ Security Note

Passwords entered this way may appear in your terminal history. Clear history if needed:
```bash
history -c  # Clear current session history
```

---

## Method 3: Bulk Password Update

Update all default user passwords at once. Useful when setting up production or resetting all passwords.

### Step 1: Edit the Script

Open `scripts/change-all-passwords.ts` and update the passwords:

```typescript
// Update admin password
const adminPassword = await hashPassword('YOUR_NEW_ADMIN_PASSWORD')

// Update student1 password
const student1Password = await hashPassword('YOUR_NEW_STUDENT1_PASSWORD')

// Update sk01 password
const sk01Password = await hashPassword('YOUR_NEW_SK01_PASSWORD')
```

**Example:**
```typescript
const adminPassword = await hashPassword('Admin@2024!Secure')
const student1Password = await hashPassword('Student1@2024!Pass')
const sk01Password = await hashPassword('SK01@2024!Password')
```

### Step 2: Run the Script

```bash
npm run password:update-all
```

### Output

```
=== Bulk Password Update ===

✅ Admin password updated
✅ Student1 password updated
✅ sk01 password updated

✅ All passwords updated successfully!
```

### Advantages

- ✅ Batch update - change all passwords at once
- ✅ Consistent - ensures all default passwords are changed
- ✅ Production-ready - perfect for initial setup

---

## Method 4: Using Prisma Studio (Visual Interface)

Use Prisma Studio's web interface to view and edit the database directly.

### Step 1: Open Prisma Studio

```bash
npm run db:studio
```

This opens a web interface at `http://localhost:5555`

### Step 2: Navigate to User Table

1. Click on the `User` table in the left sidebar
2. Find the user you want to update
3. Click on the user record to edit

### Step 3: Generate Password Hash

**Important**: Passwords are stored as hashed values. You cannot enter plain text passwords directly.

Generate a hash using this command:

```bash
node -e "const bcrypt = require('bcryptjs'); bcrypt.hash('your-password-here', 10).then(h => console.log(h))"
```

**Example:**
```bash
$ node -e "const bcrypt = require('bcryptjs'); bcrypt.hash('MyNewPassword123!', 10).then(h => console.log(h))"
$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy
```

### Step 4: Update Password

1. Copy the generated hash
2. Paste it into the `password` field in Prisma Studio
3. Click "Save 1 change"

### Advantages

- ✅ Visual - see all user data
- ✅ Flexible - can edit other fields too
- ✅ Useful for debugging

### ⚠️ Important Notes

- Always hash passwords before entering them
- Double-check the hash is correct
- Don't forget to save changes

---

## Method 5: Direct SQL Update (Advanced)

For users with direct database access who prefer SQL.

### Step 1: Generate Password Hash

```bash
node -e "const bcrypt = require('bcryptjs'); bcrypt.hash('your-password-here', 10).then(h => console.log(h))"
```

### Step 2: Update in SQL Server

Connect to your Azure SQL Server database and run:

```sql
UPDATE [User] 
SET password = 'YOUR_HASHED_PASSWORD_HERE'
WHERE username = 'admin';
```

**Example:**
```sql
-- Generate hash first: $2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy
UPDATE [User] 
SET password = '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy'
WHERE username = 'admin';
```

### Advantages

- ✅ Direct database access
- ✅ Can be scripted
- ✅ Useful for bulk operations

### ⚠️ Warning

- Requires direct database access
- Must hash passwords manually
- No validation - easy to make mistakes
- Use with caution

---

## Method 6: Update Seed Script (For New Deployments)

Modify the seed script to set new default passwords when seeding the database.

### Edit `scripts/seed.ts`

```typescript
// Change these passwords
const adminPassword = await hashPassword('YOUR_NEW_ADMIN_PASSWORD')
const student1Password = await hashPassword('YOUR_NEW_STUDENT1_PASSWORD')
const sk01Password = await hashPassword('YOUR_NEW_SK01_PASSWORD')
```

### Run Seed Script

```bash
npm run db:seed
```

**Note**: This uses `upsert`, so it will:
- Create users if they don't exist
- Update passwords if users already exist

### When to Use

- Setting up a new environment
- Resetting all passwords to new defaults
- Initial production deployment

---

## Password Requirements

### Minimum Requirements

- **Minimum length**: 6 characters
- **Recommended length**: 12+ characters

### Best Practices

- ✅ Use a mix of uppercase and lowercase letters
- ✅ Include numbers
- ✅ Include special characters (!@#$%^&*)
- ✅ Avoid common words or patterns
- ✅ Don't use personal information
- ✅ Use unique passwords for each user

### Examples of Strong Passwords

- ✅ `Admin@2024!Secure`
- ✅ `StuD3nt!P@ssw0rd`
- ✅ `SK01#Secure2024!`
- ❌ `password` (too common)
- ❌ `123456` (too simple)
- ❌ `admin123` (default password)

---

## Security Best Practices

### For Production

1. **Change default passwords immediately** after deployment
2. **Use strong, unique passwords** for each user
3. **Don't share passwords** between users
4. **Regularly rotate passwords** (every 90 days recommended)
5. **Never commit passwords** to version control
6. **Use environment variables** for sensitive data
7. **Enable two-factor authentication** if possible (future enhancement)

### Password Storage

- Passwords are hashed using bcrypt (10 rounds)
- Plain text passwords are never stored
- Hashes cannot be reversed to get original passwords

---

## Current Default Passwords

⚠️ **IMPORTANT: Change these in production!**

| Username | Default Password | Role |
|----------|-----------------|------|
| `admin` | `admin123` | Admin |
| `student1` | `student123` | Student |
| `sk01` | `student123` | Student |

---

## Troubleshooting

### Error: "User not found"

**Problem**: The username doesn't exist in the database.

**Solution**:
1. Check the username spelling
2. List all users using Prisma Studio: `npm run db:studio`
3. Verify the user exists in the database

### Error: "Password must be at least 6 characters"

**Problem**: The password is too short.

**Solution**: Use a password with at least 6 characters.

### Error: "Passwords do not match"

**Problem**: The password and confirmation don't match (interactive mode).

**Solution**: Re-run the command and ensure both entries are identical.

### Error: "Cannot connect to database"

**Problem**: Database connection issue.

**Solution**:
1. Check your `.env` file has correct `DATABASE_URL`
2. Verify Azure SQL Server is accessible
3. Check firewall rules allow your IP
4. Ensure database exists

### Password Not Working After Change

**Problem**: Password was changed but login still fails.

**Solutions**:
1. Verify the password was actually updated (check database)
2. Clear browser cookies and try again
3. Ensure you're using the correct username
4. Check for typos in the password

---

## Quick Reference

### Commands

```bash
# Interactive password change (recommended)
npm run password:change

# Quick command line change
tsx scripts/change-password.ts <username> <password>

# Bulk update all passwords (edit script first)
npm run password:update-all

# View database in Prisma Studio
npm run db:studio

# Seed database with default users
npm run db:seed
```

### Common Tasks

**Change admin password:**
```bash
npm run password:change
# Enter: admin
# Enter new password: YourNewPassword123!
```

**Change student password quickly:**
```bash
tsx scripts/change-password.ts student1 NewPassword456!
```

**Update all passwords for production:**
1. Edit `scripts/change-all-passwords.ts`
2. Update all password values
3. Run `npm run password:update-all`

---

## Additional Resources

- [Prisma Documentation](https://www.prisma.io/docs)
- [bcrypt Documentation](https://www.npmjs.com/package/bcryptjs)
- [Azure SQL Server Documentation](https://docs.microsoft.com/azure/azure-sql/)

---

## Need Help?

If you encounter issues:
1. Check the Troubleshooting section above
2. Review error messages carefully
3. Verify database connection
4. Check user exists in database
5. Ensure password meets requirements
