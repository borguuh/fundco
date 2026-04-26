import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FileText, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Whistleblowing Policy – FundCo',
  description: 'FundCo whistleblowing policy for reporting concerns and violations.'
}

export default function WhistleblowingPolicy() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Whistleblowing Policy</h1>
          <p className="text-lg opacity-95">
            Promoting transparency and accountability through secure reporting channels
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Policy Overview */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Policy Overview</h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                FundCo is committed to the highest standards of ethical conduct and regulatory compliance. This Whistleblowing Policy provides a framework for employees, contractors, and stakeholders to report concerns about potential violations, misconduct, or irregularities in a safe and confidential manner.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-foreground">Key Principles</h3>
              <ul className="space-y-3 mb-8">
                {[
                  'Confidentiality – All reports are treated with strict confidentiality',
                  'Protection – Protection from retaliation for good faith reports',
                  'Independence – Concerns are investigated independently and thoroughly',
                  'Accountability – Clear outcomes and appropriate corrective actions',
                  'Accessibility – Multiple channels for reporting concerns'
                ].map((principle, idx) => (
                  <li key={idx} className="flex gap-3 text-foreground/80">
                    <span className="text-accent">✓</span>
                    {principle}
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold mb-4 text-foreground">Scope</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                This policy covers all matters related to unethical conduct, fraud, violations of regulations, breaches of company policies, and any other concerns that could affect the Company&apos;s operations, reputation, or stakeholder interests.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-foreground">Protected Disclosures</h3>
              <p className="text-foreground/80 leading-relaxed">
                Employees and contractors who report concerns in good faith will be protected against retaliation, discrimination, or adverse action. The Company is committed to maintaining a workplace where people can speak up about concerns without fear of negative consequences.
              </p>
            </div>

            {/* Reporting Channels */}
            <div>
              <Card className="bg-secondary border border-border p-6 sticky top-24">
                <h3 className="text-lg font-bold mb-4 text-foreground">Report a Concern</h3>
                <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                  To report a concern, please contact:
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground">Email</p>
                    <a href="mailto:compliance@fundco.ng" className="text-primary hover:text-primary/80 text-sm break-all">
                      compliance@fundco.ng
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">General Inquiries</p>
                    <a href="mailto:info@fundco.ng" className="text-primary hover:text-primary/80 text-sm break-all">
                      info@fundco.ng
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Phone</p>
                    <a href="tel:+2340145453614" className="text-primary hover:text-primary/80 text-sm">
                      +234 01-4545361
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Procedures */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Reporting Procedures</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { step: '1', title: 'Submit', desc: 'Report concern via email or phone' },
                { step: '2', title: 'Acknowledge', desc: 'Receipt of report is confirmed' },
                { step: '3', title: 'Investigate', desc: 'Independent investigation conducted' },
                { step: '4', title: 'Resolve', desc: 'Outcomes and actions communicated' }
              ].map((item, idx) => (
                <Card key={idx} className="bg-secondary border border-border p-4">
                  <div className="text-2xl font-bold text-primary mb-2">{item.step}</div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm">{item.title}</h4>
                  <p className="text-foreground/70 text-xs">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Confidentiality & Protection */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-secondary border border-border p-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Confidentiality</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                All reports are handled confidentially. The identity of the reporter will be protected to the extent possible under applicable laws. Investigation details are shared only on a need-to-know basis.
              </p>
            </Card>
            <Card className="bg-secondary border border-border p-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Protection</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                The Company prohibits retaliation against anyone who makes a report in good faith. Retaliation or adverse action against whistleblowers will be considered a serious violation of policy.
              </p>
            </Card>
          </div>

          {/* Policy Document */}
          <Card className="bg-primary text-primary-foreground p-8 mb-12">
            <div className="flex gap-4 items-start">
              <FileText className="flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-bold mb-2">Complete Policy Document</h3>
                <p className="opacity-95 mb-4">
                  For the complete Whistleblowing Policy document with detailed procedures and guidelines, please download the PDF below.
                </p>
                <Button variant="secondary">
                  Download Policy <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>
            </div>
          </Card>

          {/* FAQ */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {[
                {
                  q: 'Can I report anonymously?',
                  a: 'Yes, you can submit an anonymous report. While we prefer to have contact information for follow-up, reports can be made without identifying information.'
                },
                {
                  q: 'What happens after I report?',
                  a: 'Your report will be acknowledged, investigated thoroughly, and you may be updated on outcomes subject to confidentiality constraints.'
                },
                {
                  q: 'Am I protected if I report in good faith?',
                  a: 'Yes. The Company prohibits retaliation against anyone making a good faith report under this policy.'
                },
                {
                  q: 'Who investigates the report?',
                  a: 'Reports are investigated by appropriate internal parties or, if necessary, independent external investigators to ensure objectivity.'
                }
              ].map((faq, idx) => (
                <Card key={idx} className="bg-secondary border border-border p-6">
                  <h4 className="font-semibold text-foreground mb-2">{faq.q}</h4>
                  <p className="text-foreground/70 text-sm">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Related Policies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/corporate-governance">
              <Card className="bg-background border border-border p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <h3 className="font-semibold text-foreground">Corporate Governance</h3>
              </Card>
            </Link>
            <Link href="/disclaimer">
              <Card className="bg-background border border-border p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <h3 className="font-semibold text-foreground">Legal Disclaimer</h3>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
