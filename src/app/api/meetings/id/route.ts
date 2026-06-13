import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/app/lib/mongodb'
import Meeting from '@/models/meeting'

// 회의 수정
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB()
    const body = await req.json()
    const meeting = await Meeting.findByIdAndUpdate(
      params.id, body, { new: true }
    )
    return NextResponse.json(meeting)
  } catch (error) {
    return NextResponse.json({ error: '수정 실패' }, { status: 500 })
  }
}

// 회의 삭제
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB()
    await Meeting.findByIdAndDelete(params.id)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: '삭제 실패' }, { status: 500 })
  }
}