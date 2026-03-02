import { NextResponse } from 'next/server'
import { getAffiliateLink } from '@/lib/affiliateLinks'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const url = getAffiliateLink(params.slug)

  if (!url) {
    return NextResponse.redirect(new URL('/resources', request.url))
  }

  return NextResponse.redirect(url)
}
