import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  if (!body || !body.name || !body.email || !body.message) {
    return NextResponse.json({ ok: false, error: 'Invalid payload' }, { status: 400 })
  }
  // In production, integrate with an email service (e.g., Resend, SendGrid)
  console.log('Contact form submission', body)
  return NextResponse.json({ ok: true })
}