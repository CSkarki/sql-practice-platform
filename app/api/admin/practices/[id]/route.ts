import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await requireAuth('admin')
    const { id } = await params
    
    const practice = await prisma.practiceBank.findFirst({
      where: { 
        id,
        createdById: user.id 
      }
    })

    if (!practice) {
      return NextResponse.json({ error: 'Practice set not found' }, { status: 404 })
    }

    return NextResponse.json({ practice })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 401 })
  }
}

