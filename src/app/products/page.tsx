import Container from '@/components/ui/Container'
import ArticleCard from '@/components/ArticleCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Creator Products & Playbooks',
  description: 'Premium TikTok monetization playbooks, checklists, and templates to grow earnings faster.',
}

const products = [
  {
    title: 'Creator Rewards Accelerator',
    excerpt: 'A step-by-step playbook with templates and checklists.',
    href: '/products/creator-rewards-accelerator',
  },
  {
    title: 'Viral Content Playbook',
    excerpt: 'Hook formulas, pacing templates, and series builders.',
    href: '/products/viral-content-playbook',
  },
  {
    title: 'TikTok Monetization Masterclass',
    excerpt: 'A video course covering rewards, affiliates, and scaling.',
    href: '/products/monetization-masterclass',
  },
]

export default function ProductsPage() {
  return (
    <section className="py-12">
      <Container>
        <div className="space-y-6">
          <header className="space-y-3">
            <h1 className="text-3xl font-semibold text-[var(--color-text)]">Digital products</h1>
            <p className="text-sm text-[var(--color-text-muted)]">
              Premium templates and courses built for creator monetization.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ArticleCard
                key={product.href}
                title={product.title}
                excerpt={product.excerpt}
                href={product.href}
                tag="Product"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
