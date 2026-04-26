import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Leaf, TrendingUp, Users } from 'lucide-react'

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Mobilizing Capital for Sustainable Infrastructure
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-95 leading-relaxed">
              A specialized alternative asset manager investing local capital in real assets that lead the transition to a low-carbon economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about">
                <Button size="lg" variant="secondary">
                  Learn More <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <a href="https://investor.fundco.ng" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Investor Login
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Mission</h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                We innovatively unlock domestic finance for small and medium-sized infrastructure in unserved or under-served sectors that provide essential services to society.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <Leaf className="text-accent flex-shrink-0 mt-1" size={24} />
                  <span className="text-foreground">Recession-resilient investments with predictable cashflows</span>
                </li>
                <li className="flex gap-3">
                  <Leaf className="text-accent flex-shrink-0 mt-1" size={24} />
                  <span className="text-foreground">Long-term viability with climate impact</span>
                </li>
                <li className="flex gap-3">
                  <Leaf className="text-accent flex-shrink-0 mt-1" size={24} />
                  <span className="text-foreground">Proactive ESG management</span>
                </li>
              </ul>
            </div>
            <div className="bg-secondary rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Target Sectors</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Housing', 'Energy', 'Education', 'Healthcare', 'Agriculture'].map((sector) => (
                  <div key={sector} className="bg-background rounded p-4 text-center border border-border">
                    <p className="font-semibold text-foreground">{sector}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Approach */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Investment Approach</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              We identify, structure, and connect real assets to the domestic institutional market through sustainable infrastructure funds.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Risk-Adjusted Returns',
                description: 'Deliver strong financial returns alongside proactive ESG management'
              },
              {
                icon: Leaf,
                title: 'Sustainable Impact',
                description: 'Lead the transition to a low-carbon economy through strategic investments'
              },
              {
                icon: Users,
                title: 'Strategic Partnerships',
                description: 'Partner with thought-leaders in blended finance and development'
              }
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <Card key={idx} className="bg-background border border-border p-8">
                  <Icon className="text-primary mb-4" size={32} />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Funds */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Funds</h2>
            <p className="text-lg text-foreground/80">
              Tailored strategies for sustainable infrastructure investment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Clean Energy Fund',
                description: 'Catalyzing private sector participation in climate and sustainable infrastructure finance. Attracting investments into climate change adaptation projects linked to Nigeria&apos;s NDCs.'
              },
              {
                title: 'Affordable Housing Fund',
                description: 'Addressing Nigeria&apos;s housing deficit while promoting economic growth. Supporting sustainable residential infrastructure development across the country.'
              }
            ].map((fund, idx) => (
              <Card key={idx} className="bg-secondary border border-border p-8">
                <h3 className="text-2xl font-semibold mb-3 text-foreground">{fund.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{fund.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/funds">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore Our Funds <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Invest in Sustainable Infrastructure?</h2>
          <p className="text-lg mb-8 opacity-95">
            Get in touch with our team to discuss investment opportunities tailored to your portfolio.
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
