import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Leaf, TrendingUp, Users, CheckCircle2 } from 'lucide-react'

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-balance">
              Mobilizing Capital for Sustainable Infrastructure
            </h1>
            <p className="text-lg md:text-xl mb-10 opacity-90 leading-relaxed max-w-2xl">
              A specialized alternative asset manager investing local capital in real assets that lead the transition to a low-carbon economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about">
                <Button size="lg" variant="secondary" className="shadow-lg hover:shadow-xl transition-all duration-200">
                  Learn More <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <a href="https://investor.fundco.ng" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-200 shadow-lg">
                  Investor Login
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground leading-tight">Our Mission</h2>
              <p className="text-lg text-foreground/75 mb-8 leading-relaxed">
                We innovatively unlock domestic finance for small and medium-sized infrastructure in unserved or under-served sectors that provide essential services to society.
              </p>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={24} />
                  <span className="text-foreground/85">Recession-resilient investments with predictable cashflows</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={24} />
                  <span className="text-foreground/85">Long-term viability with climate impact</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={24} />
                  <span className="text-foreground/85">Proactive ESG management</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-secondary to-secondary/80 rounded-xl p-10 border border-border/40 shadow-sm">
              <h3 className="text-3xl font-bold mb-8 text-foreground">Target Sectors</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Housing', 'Energy', 'Education', 'Healthcare', 'Agriculture'].map((sector) => (
                  <div key={sector} className="bg-background rounded-lg p-4 text-center border border-border/60 hover:border-primary/40 hover:shadow-md transition-all duration-200">
                    <p className="font-semibold text-foreground">{sector}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Approach */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">Our Investment Approach</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
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
                <Card key={idx} className="bg-background border border-border/40 p-8 rounded-xl hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                  <div className="bg-primary/10 rounded-lg p-3 w-fit mb-6">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">{item.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Funds */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">Our Funds</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
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
              <Card key={idx} className="bg-gradient-to-br from-secondary to-secondary/80 border border-border/40 p-10 rounded-xl hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-foreground">{fund.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{fund.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/funds">
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-200">
                Explore Our Funds <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-primary to-primary/95 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-balance">Ready to Invest in Sustainable Infrastructure?</h2>
          <p className="text-lg mb-10 opacity-90 max-w-2xl mx-auto">
            Get in touch with our team to discuss investment opportunities tailored to your portfolio.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="shadow-lg hover:shadow-xl transition-all duration-200">
              Contact Us <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
