import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const user = await requireAuth('student')
    const data = await request.json()

    const { query } = data

    if (!query || typeof query !== 'string') {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 })
    }

    // Security: Only allow SELECT queries
    const trimmedQuery = query.trim().toUpperCase()
    if (!trimmedQuery.startsWith('SELECT')) {
      return NextResponse.json({ 
        error: 'Only SELECT queries are allowed for security reasons' 
      }, { status: 400 })
    }

    // Additional security: Block dangerous keywords
    const dangerousKeywords = [
      'DROP', 'DELETE', 'UPDATE', 'INSERT', 'ALTER', 'CREATE', 
      'TRUNCATE', 'EXEC', 'EXECUTE', 'SP_', 'XP_', '--', '/*'
    ]
    
    const upperQuery = query.toUpperCase()
    for (const keyword of dangerousKeywords) {
      if (upperQuery.includes(keyword)) {
        return NextResponse.json({ 
          error: `Query contains restricted keyword: ${keyword}` 
        }, { status: 400 })
      }
    }

    // Limit query length
    if (query.length > 5000) {
      return NextResponse.json({ 
        error: 'Query is too long (max 5000 characters)' 
      }, { status: 400 })
    }

    try {
      // Execute query using Prisma raw query
      // Note: This uses the same database connection
      const result = await prisma.$queryRawUnsafe(query)
      
      // Format result for display
      const rows = Array.isArray(result) ? result : [result]
      
      // Get column names from first row
      const columns = rows.length > 0 ? Object.keys(rows[0] as any) : []
      
      return NextResponse.json({
        success: true,
        columns,
        rows: rows.slice(0, 100), // Limit to 100 rows for display
        rowCount: rows.length,
        message: rows.length > 100 ? 'Showing first 100 rows' : null
      })
    } catch (dbError: any) {
      // Return database error in a safe way
      return NextResponse.json({
        success: false,
        error: dbError.message || 'Query execution failed',
        details: process.env.NODE_ENV === 'development' ? dbError.toString() : undefined
      }, { status: 400 })
    }
  } catch (error: any) {
    console.error('Run query error:', error)
    return NextResponse.json({ 
      error: error.message || 'Failed to execute query' 
    }, { status: 500 })
  }
}

