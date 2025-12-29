import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const user = await requireAuth('admin')
    const data = await request.json()

    const { practiceBankId, studentId, scheduledDate, dueDate } = data

    if (!practiceBankId || !studentId || !scheduledDate) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const scheduledTest = await prisma.scheduledTest.create({
      data: {
        practiceBankId,
        studentId,
        scheduledDate: new Date(scheduledDate),
        dueDate: dueDate ? new Date(dueDate) : null,
        status: 'scheduled'
      }
    })

    return NextResponse.json({ scheduledTest })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 401 })
  }
}

