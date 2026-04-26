import { Metadata } from 'next'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Team – FundCo',
  description: 'Meet the leadership team at FundCo, bringing together expertise in finance, infrastructure, and sustainable development.'
}

interface TeamMember {
  name: string
  role: string
  bio: string
}

const boardMembers: TeamMember[] = [
  {
    name: 'Mr. Aderemi Oguntoye, SAN',
    role: 'Director & Chairman of the Board',
    bio: 'Brings extensive legal expertise and corporate governance experience to lead the board.'
  },
  {
    name: 'Mrs. Yewande Senbore',
    role: 'Non-Executive Director',
    bio: 'Contributes strategic oversight and independent perspective to board decisions.'
  },
  {
    name: 'Abiodun Oni',
    role: 'Chief Executive Officer',
    bio: 'Leads day-to-day operations and strategic execution of company objectives.'
  },
  {
    name: 'Maurice Okoli',
    role: 'Director',
    bio: 'Provides strategic direction and expertise in fund management and operations.'
  },
  {
    name: 'Fiona Robertson-Etete',
    role: 'Non-Executive Director',
    bio: 'Offers international experience and governance best practices from global markets.'
  }
]

export default function Team() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-lg opacity-95">
            Experienced professionals dedicated to sustainable infrastructure investment
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Leadership Team</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {boardMembers.map((member, idx) => (
              <Card key={idx} className="bg-secondary border border-border p-8">
                <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-accent font-semibold mb-4">{member.role}</p>
                <p className="text-foreground/80 leading-relaxed">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Strength */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary text-primary-foreground p-8">
            <h3 className="text-2xl font-bold mb-4">Staff Strength</h3>
            <p className="text-lg opacity-95 leading-relaxed">
              The Company employs over 30 staff across its operations in Lagos and other locations, with expertise spanning fund management, compliance, operations, and infrastructure development.
            </p>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Integrity',
                description: 'We maintain the highest standards of corporate governance and ethical conduct.'
              },
              {
                title: 'Innovation',
                description: 'We drive innovation in infrastructure finance and sustainable asset management.'
              },
              {
                title: 'Impact',
                description: 'We deliver positive environmental and social outcomes alongside financial returns.'
              }
            ].map((value, idx) => (
              <Card key={idx} className="bg-secondary border border-border p-6">
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
