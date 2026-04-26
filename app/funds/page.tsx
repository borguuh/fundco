import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Funds – FundCo',
  description: 'Explore FundCo&apos;s sustainable infrastructure investment funds focused on clean energy and affordable housing.'
}

export default function Funds() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Funds</h1>
          <p className="text-lg opacity-95 leading-relaxed">
            Tailored strategies to preserve and grow institutional investments in sustainable infrastructure assets.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Our Mission</h2>
              <p className="text-foreground/80 leading-relaxed">
                We innovatively unlock domestic finance for small and medium-sized infrastructure in unserved or under-served sectors that provide essential services to society, are recession resilient, demonstrate long term viability with predictable cashflows and reduce the impact of climate change.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Our Approach</h2>
              <p className="text-foreground/80 leading-relaxed">
                Our range of strategies and opportunities are tailored to preserve and grow institutional investments in sustainable infrastructure assets alongside proactive management of environmental, social and governance (ESG) considerations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Sectors */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Target Sectors</h2>
          <p className="text-foreground/80 mb-8 leading-relaxed">
            Our investments directly address key sustainability challenges and provide innovative solutions that seek positive impact while achieving strong risk-adjusted financial returns.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Housing', 'Energy', 'Education', 'Healthcare', 'Agriculture'].map((sector) => (
              <Card key={sector} className="bg-background border border-border p-6 text-center">
                <p className="font-semibold text-foreground">{sector}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Funds */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Current Funds</h2>
          
          <div className="space-y-8 mb-12">
            {/* Clean Energy Fund */}
            <Card className="bg-secondary border border-border p-8">
              <div className="flex gap-4 mb-4">
                <div className="text-accent">
                  <Lightbulb size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Clean Energy Fund</h3>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    Our Clean Energy Fund acts as a catalyst for private sector participation in climate and sustainable infrastructure finance. It attracts investments from pension funds, insurance firms and other long-term institutional investors into eligible climate change adaptation projects linked to Nigeria&apos;s National Determined Contributions (NDCs).
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    This fund deepens the Nigerian capital markets with a new climate-compliant infrastructure asset and facilitates access to long-term local currency financing for essential energy projects across the country.
                  </p>
                </div>
              </div>
            </Card>

            {/* Affordable Housing Fund */}
            <Card className="bg-secondary border border-border p-8">
              <div className="flex gap-4 mb-4">
                <div className="text-accent">
                  <Lightbulb size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Affordable Housing Fund</h3>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    Nigeria&apos;s population is forecast to grow at 2.6% per annum. Our Affordable Housing Fund addresses the critical housing deficit by channeling institutional capital into sustainable residential infrastructure development across the country.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    This fund creates opportunities for institutional investors to participate in the significant growth potential of Nigeria&apos;s housing sector while supporting economic development and employment creation.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Fund Status */}
          <div className="bg-primary text-primary-foreground rounded-lg p-8 mb-12">
            <h3 className="text-xl font-semibold mb-2">Current Status</h3>
            <p className="text-primary-foreground/95">
              Our strategic funds are already in the implementation phase and progressing along in the process of SEC registration. We are committed to launching these funds to institutional investors in the coming months.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Sectors */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Strategic Sectors</h2>
          <p className="text-foreground/80 mb-8 leading-relaxed">
            Our strategic aim is to manage sector focused funds in select industries with high-growth potential. These are selected industries providing essential services to society, with domestic geographic diversity, secure cash flows, recession resilience, and inflation protection.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Clean Energy',
                description: 'Nigeria is now the country with the largest number of people without energy access in the world – over 85 million people. Our clean energy investments address this critical infrastructure gap.'
              },
              {
                title: 'Affordable Housing',
                description: 'With rapid population growth and significant housing deficit, our housing investments provide essential infrastructure while supporting economic development and job creation.'
              }
            ].map((sector, idx) => (
              <Card key={idx} className="bg-background border border-border p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">{sector.title}</h3>
                <p className="text-foreground/70">{sector.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Strategic Partnerships</h2>
          <p className="text-foreground/80 mb-4 leading-relaxed">
            Our aim is to lead the effort to diversify from traditional mainstream assets to alternative infrastructure asset classes that accelerate the transition to a low-carbon economy.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            We believe this creates an unparalleled opportunity for strategic partnerships for innovation and sustainable development (SDG 17) that will create value and better risk-adjusted returns for institutional investors.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Our Funds?</h2>
          <p className="text-lg mb-8 opacity-95">
            Get in touch with our team to discuss investment opportunities
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Contact Us <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
