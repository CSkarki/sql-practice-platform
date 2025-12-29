import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const user = await requireAuth('admin')
    
    const practices = await prisma.practiceBank.findMany({
      where: { createdById: user.id },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json({ practices })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 401 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await requireAuth('admin')
    const data = await request.json()

    const { title, businessDomain, category, focusAreas, questions, answers } = data

    if (!title || !businessDomain || !category || !focusAreas || !questions || !answers) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const practice = await prisma.practiceBank.create({
      data: {
        title,
        businessDomain,
        category,
        focusAreas: JSON.stringify(focusAreas),
        questions: JSON.stringify(questions),
        answers: JSON.stringify(answers),
        createdById: user.id
      }
    })

    return NextResponse.json({ practice })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 401 })
  }
}

