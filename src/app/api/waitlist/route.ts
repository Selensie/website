import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { waitlist } from '@/lib/db/schema'
import { eq, count } from 'drizzle-orm'
import { logError } from '@/lib/error-tracking'

export async function POST(request: NextRequest) {
  try {
    const { email, referredBy } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const existing = await db.select().from(waitlist).where(eq(waitlist.email, email))
    
    if (existing.length > 0) {
      const totalCount = await db.select({ count: count() }).from(waitlist)
      return NextResponse.json({
        message: 'Already on waitlist',
        position: existing[0].position,
        referralCode: existing[0].referralCode,
        total: totalCount[0].count
      })
    }

    const referralCode = Math.random().toString(36).substring(2, 8).toUpperCase()
    const totalCount = await db.select({ count: count() }).from(waitlist)
    const position = totalCount[0].count + 1

    await db.insert(waitlist).values({
      email,
      referralCode,
      referredBy: referredBy || null,
      position
    })

    if (referredBy) {
      const referrer = await db.select().from(waitlist).where(eq(waitlist.referralCode, referredBy))
      if (referrer.length > 0) {
        await db.update(waitlist)
          .set({ position: referrer[0].position - 1 })
          .where(eq(waitlist.referralCode, referredBy))
      }
    }

    return NextResponse.json({
      message: 'Successfully joined waitlist',
      position,
      referralCode,
      total: position
    })
  } catch (error) {
    logError(error as Error, { endpoint: '/api/waitlist' })
    return NextResponse.json({ error: 'Failed to join waitlist' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const totalCount = await db.select({ count: count() }).from(waitlist)
    return NextResponse.json({ total: totalCount[0].count })
  } catch (error) {
    logError(error as Error, { endpoint: '/api/waitlist GET' })
    return NextResponse.json({ total: 0 })
  }
}