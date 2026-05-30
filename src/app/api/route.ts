import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/app/lib/mongodb'
import Meeting from '@/models/meeting'

export async function GET() {
  try {
    await connectDB()
    const meetings = await Meeting.find().sort({ createdAt: -1 })
    return NextResponse.json(meetings)
  } catch (error) {
    return NextResponse.json({ error: '조회 실패' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB()
    const body = await req.json()
    const meeting = await Meeting.create(body)
    return NextResponse.json(meeting, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: '저장 실패' }, { status: 500 })
  }
}