import { Metadata } from 'next'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Corporate Governance – FundCo',
  description: 'FundCo corporate governance policies and practices.'
}

export default function CorporateGovernance() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Corporate Governance</h1>
          <p className="text-lg opacity-95">
            Our commitment to transparency, accountability, and ethical business practices
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Our Governance Framework</h2>
          <p className="text-foreground/80 mb-8 leading-relaxed">
            FundCo is committed to maintaining the highest standards of corporate governance, transparency, and ethical conduct. We operate under strict regulatory oversight from the Nigeria Securities & Exchange Commission and adhere to international best practices in fund management.
          </p>

          {/* Governance Pillars */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: 'Board of Directors',
                description: 'Experienced directors providing strategic oversight and independent perspective on company matters.'
              },
              {
                title: 'Compliance',
                description: 'Robust compliance framework ensuring adherence to regulatory requirements and internal policies.'
              },
              {
                title: 'Risk Management',
                description: 'Comprehensive risk management procedures to protect investor interests and company assets.'
              },
              {
                title: 'Transparency',
                description: 'Clear communication of investment strategies, performance, and governance matters to stakeholders.'
              }
            ].map((pillar, idx) => (
              <Card key={idx} className="bg-secondary border border-border p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">{pillar.title}</h3>
                <p className="text-foreground/70">{pillar.description}</p>
              </Card>
            ))}
          </div>

          {/* Board of Directors */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Board of Directors</h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Our Board comprises experienced professionals with extensive expertise in finance, infrastructure, and sustainable development.
            </p>
            <div className="space-y-3">
              {[
                'Mr. Aderemi Oguntoye, SAN – Director & Chairman of the Board',
                'Mrs. Yewande Senbore – Non-Executive Director',
                'Mr. Abiodun Oni – Chief Executive Officer',
                'Mr. Maurice Okoli – Director',
                'Ms. Fiona Robertson-Etete – Non-Executive Director'
              ].map((member, idx) => (
                <div key={idx} className="flex gap-3 text-foreground/80">
                  <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={20} />
                  <span>{member}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Staff Strength */}
          <Card className="bg-secondary border border-border p-8 mb-12">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Staff Strength</h3>
            <p className="text-foreground/80 leading-relaxed">
              The Company employs over 30 staff across its operations in Lagos and other locations. Our team is composed of experienced professionals with expertise spanning fund management, compliance, operations, and infrastructure development. We maintain a diverse workforce committed to delivering excellence and driving sustainable outcomes.
            </p>
          </Card>

          {/* Key Principles */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Governance Principles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Regulatory Compliance with SEC requirements',
                'Fiduciary duty to investors and stakeholders',
                'Independence and objective board oversight',
                'Transparent reporting and communication',
                'Ethical business practices and integrity',
                'Risk management and internal controls',
                'Environmental and social responsibility',
                'Regular training and development'
              ].map((principle, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="text-primary flex-shrink-0">✓</div>
                  <p className="text-foreground">{principle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Policies */}
          <div className="bg-primary text-primary-foreground rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Policy Framework</h3>
            <p className="mb-6 opacity-95 leading-relaxed">
              FundCo maintains comprehensive policies covering ethics, conflicts of interest, whistleblowing, anti-money laundering, and know-your-client procedures. All policies are regularly reviewed and updated to ensure continued effectiveness and regulatory alignment.
            </p>
            <p className="opacity-95">
              For more information about our whistleblowing policy and procedures, please visit our{' '}
              <Link href="/whistleblowing-policy" className="underline hover:opacity-80 transition-opacity">
                Whistleblowing Policy page
              </Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
