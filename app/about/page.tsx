import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About FundCo – Capital Manager',
  description: 'Learn about FundCo, a specialized alternative asset manager mobilizing local capital for sustainable infrastructure.'
}

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-balance">About FundCo</h1>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-2xl">
            We are a specialized alternative asset manager mobilizing and investing local capital in real assets that will lead the transition to a low-carbon economy.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground leading-tight">Who We Are</h2>
            <p className="text-lg text-foreground/75 mb-6 leading-relaxed">
              As demand for asset allocation to alternatives continues to increase, we see a market where alternatives are becoming more valuable relative to other assets, and supply remains insufficient.
            </p>
            <p className="text-lg text-foreground/75 mb-6 leading-relaxed">
              We are well positioned to help institutional investors access this asset class and deliver risk-adjusted returns alongside proactive management of environmental, social and governance (ESG) considerations.
            </p>
            <p className="text-lg text-foreground/75 leading-relaxed">
              We do this sustainably in partnership with our development partners, thought-leaders in blended finance, infrastructure, fintech, and development finance to drive innovation beyond conventional asset management.
            </p>
          </div>

          {/* Key Strengths */}
          <Card className="bg-gradient-to-br from-secondary to-secondary/80 border border-border/40 p-10 rounded-xl mb-16">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Our Strengths</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Expertise in alternative asset management',
                'Deep understanding of local capital markets',
                'Strong track record in infrastructure investment',
                'Commitment to environmental sustainability',
                'Experienced team with diverse backgrounds',
                'Strategic partnerships with global leaders'
              ].map((strength, idx) => (
                <div key={idx} className="flex gap-3">
                  <CheckCircle className="text-accent flex-shrink-0" size={24} />
                  <span className="text-foreground">{strength}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Regulatory Info */}
          <div className="bg-secondary rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Regulatory Compliance</h3>
            <p className="text-foreground/80 leading-relaxed">
              FundCo is authorised and registered by the Nigeria Securities & Exchange Commission to conduct the business of a fund/portfolio manager. We adhere to the highest standards of corporate governance and regulatory compliance.
            </p>
          </div>

          {/* SDG Alignment */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Sustainable Development Goals</h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Our investment approach holds great potential to deliver the three pillars of the SDGs: economic, environmental and social sustainability. We focus on:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { number: '8', title: 'Decent Work and Economic Growth' },
                { number: '11', title: 'Sustainable Cities and Communities' },
                { number: '14', title: 'Climate Action' }
              ].map((goal) => (
                <Card key={goal.number} className="bg-background border border-border p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{goal.number}</div>
                  <p className="font-semibold text-foreground">{goal.title}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Meet Our Leadership</h2>
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            Our team brings together diverse expertise in finance, infrastructure, and sustainable development.
          </p>
          <Link href="/team">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View Our Team <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold mb-8 text-foreground">You might also be interested in</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { href: '/investment-approach', label: 'Investment Approach' },
              { href: '/funds', label: 'Our Funds' },
              { href: '/contact', label: 'Get in Touch' }
            ].map((link) => (
              <Link key={link.href} href={link.href}>
                <Card className="bg-secondary border border-border p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <p className="font-semibold text-foreground">{link.label}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
