// Newsletter subscription — aliases /api/email for EmailCapture component compatibility
import { NextResponse } from 'next/server'
import { z } from 'zod'

const bodySchema = z.object({
  email: z.string().email('Invalid email address').max(254),
  source: z.string().max(100).optional(),
})

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const parsed = bodySchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? 'Invalid input' },
      { status: 400 }
    )
  }

  const { email } = parsed.data
  const apiKey = process.env.CONVERTKIT_API_KEY
  const formId = process.env.CONVERTKIT_FORM_ID

  if (!apiKey || !formId) {
    // Dev: return success so the UI flow is testable without env vars
    return NextResponse.json({ success: true })
  }

  const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ api_key: apiKey, email }),
  })

  if (!response.ok) {
    return NextResponse.json({ error: 'Subscription failed' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
