import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Investment Approach – FundCo',
  description: 'Learn about FundCo&apos;s comprehensive investment strategy for sustainable infrastructure.'
}

export default function InvestmentApproach() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Investment Approach</h1>
          <p className="text-lg opacity-95">
            Strategic investment in real assets that deliver financial returns and environmental impact
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Strategy</h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              There is a growing market for small and medium-sized businesses in the real sector, providing accessible and affordable essential services to unserved or under-served markets, with a potential to scale. These real sector companies are creating new markets, with long term viability, a strong potential to reduce the impact of climate change and promote local economic growth because they are creating jobs, promoting gender diversity and reducing poverty.
            </p>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Our investment strategy is to identify, structure, aggregate and connect these real assets within our target sectors to the domestic institutional market through our investment funds.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              As the largest source of long-term local investment capital, the domestic institutional market has an especially important role to play as an effective investment tool to finance Africa&apos;s transition to a low-carbon economy.
            </p>
          </div>

          {/* Key Pillars */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Core Investment Pillars</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Identify',
                  description: 'Discover sustainable infrastructure opportunities with strong fundamentals and growth potential across our target sectors.'
                },
                {
                  title: 'Structure',
                  description: 'Develop investment structures that align institutional investor requirements with sustainable development impact.'
                },
                {
                  title: 'Aggregate',
                  description: 'Combine complementary assets to create diversified, risk-adjusted portfolio opportunities.'
                },
                {
                  title: 'Connect',
                  description: 'Link institutional capital with quality infrastructure assets through professionally managed funds.'
                }
              ].map((pillar, idx) => (
                <Card key={idx} className="bg-secondary border border-border p-6">
                  <h4 className="text-lg font-semibold mb-2 text-foreground">{pillar.title}</h4>
                  <p className="text-foreground/70">{pillar.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Investment Criteria */}
          <Card className="bg-secondary border border-border p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Investment Criteria</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Provides essential services to society',
                'Demonstrates long-term viability',
                'Recession-resilient with predictable cashflows',
                'Reduces climate change impact',
                'Supports local economic growth',
                'Creates employment opportunities',
                'Promotes inclusive development',
                'Offers risk-adjusted returns'
              ].map((criteria, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <p className="text-foreground">{criteria}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Institutional Capital */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Unlocking Institutional Capital</h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Domestic institutional investors – including pension funds, insurance companies, and asset managers – represent the largest pool of long-term capital in most emerging markets. Our approach connects this capital with high-quality infrastructure assets that:
            </p>
            <ul className="space-y-3">
              {[
                'Deliver competitive risk-adjusted returns',
                'Align with institutional investment mandates',
                'Support sustainability objectives',
                'Contribute to climate transition finance',
                'Drive inclusive economic development'
              ].map((item, idx) => (
                <li key={idx} className="text-foreground/80 flex gap-3">
                  <span className="text-accent">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SDGs */}
          <Card className="bg-primary text-primary-foreground p-8">
            <h3 className="text-2xl font-bold mb-4">Sustainable Development Goals</h3>
            <p className="mb-6 opacity-95">
              Our investment approach holds great potential to deliver the three pillars of the SDGs: economic, environmental and social sustainability. We focus on investments that advance SDG 8 (Decent Work and Economic Growth), SDG 11 (Sustainable Cities and Communities), and SDG 13 (Climate Action).
            </p>
            <p className="opacity-95">
              Through strategic partnerships with development finance institutions, our investments are designed to catalyze broader economic transformation and sustainable development in emerging markets.
            </p>
          </Card>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Strategic Partnerships</h2>
          <p className="text-foreground/80 mb-8 leading-relaxed">
            We achieve impact through partnerships with thought-leaders in blended finance, infrastructure, fintech, and development finance. These partnerships enable us to:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Access development finance expertise and resources',
              'Integrate global best practices in sustainable investing',
              'Leverage technology and fintech innovation',
              'Strengthen deal sourcing and execution capabilities',
              'Enhance ESG due diligence and impact measurement',
              'Drive innovation in infrastructure finance'
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="text-primary flex-shrink-0">✓</div>
                <p className="text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Learn More About Our Funds</h2>
          <p className="text-lg text-foreground/80 mb-8">
            Explore our current investment opportunities and sector focus
          </p>
          <Link href="/funds">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View Our Funds <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
