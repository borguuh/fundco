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
  initials: string
}

const boardMembers: TeamMember[] = [
  {
    name: 'Mr. Aderemi Oguntoye, SAN',
    role: 'Director & Chairman of the Board',
    bio: 'Brings extensive legal expertise and corporate governance experience to lead the board.',
    initials: 'AO'
  },
  {
    name: 'Mrs. Yewande Senbore',
    role: 'Non-Executive Director',
    bio: 'Contributes strategic oversight and independent perspective to board decisions.',
    initials: 'YS'
  },
  {
    name: 'Abiodun Oni',
    role: 'Chief Executive Officer',
    bio: 'Leads day-to-day operations and strategic execution of company objectives.',
    initials: 'AO'
  },
  {
    name: 'Maurice Okoli',
    role: 'Director',
    bio: 'Provides strategic direction and expertise in fund management and operations.',
    initials: 'MO'
  },
  {
    name: 'Fiona Robertson-Etete',
    role: 'Non-Executive Director',
    bio: 'Offers international experience and governance best practices from global markets.',
    initials: 'FR'
  }
]

export default function Team() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-balance">Our Team</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Experienced professionals dedicated to sustainable infrastructure investment
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground leading-tight">Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, idx) => (
              <Card key={idx} className="bg-background border border-border/40 overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                {/* Avatar Placeholder */}
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 aspect-square flex items-center justify-center border-b border-border/40">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary-foreground">{member.initials}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-lg font-bold text-foreground mb-3">{member.name}</h3>
                  <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wide">{member.role}</p>
                  <p className="text-foreground/70 leading-relaxed text-sm">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Strength */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground p-12 rounded-xl border-0 shadow-lg">
            <h3 className="text-3xl font-bold mb-6">Staff Strength</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              The Company employs over 30 staff across its operations in Lagos and other locations, with expertise spanning fund management, compliance, operations, and infrastructure development.
            </p>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground leading-tight">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Integrity',
                description: 'We maintain the highest standards of corporate governance and ethical conduct in all our operations.'
              },
              {
                title: 'Innovation',
                description: 'We drive innovation in infrastructure finance and sustainable asset management practices.'
              },
              {
                title: 'Impact',
                description: 'We deliver positive environmental and social outcomes alongside strong financial returns.'
              }
            ].map((value, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-secondary to-secondary/80 border border-border/40 p-8 rounded-xl hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <div className="bg-accent/15 rounded-lg p-3 w-fit mb-6">
                  <div className="w-8 h-8 rounded-full bg-accent/30" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
