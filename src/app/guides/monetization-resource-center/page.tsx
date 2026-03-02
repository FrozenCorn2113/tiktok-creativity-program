import Container from '@/components/ui/Container'
import { compileGuide, getGuideBySlug } from '@/lib/mdx'

export default async function MonetizationResourceCenterPage() {
  const { content } = getGuideBySlug('monetization-resource-center')
  const compiled = await compileGuide(content)

  return (
    <section className="py-12">
      <Container>
        <div className="prose prose-slate max-w-none">{compiled.content}</div>
      </Container>
    </section>
  )
}
