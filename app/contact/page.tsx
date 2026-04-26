'use client'

import { Metadata } from 'next'
import { useState, FormEvent, ChangeEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  message: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message?: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState<FormStatus>({ type: 'idle' })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus({ type: 'loading' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We will get back to you soon.'
        })
        setFormData({ name: '', email: '', message: '' })
        // Clear success message after 5 seconds
        setTimeout(() => setStatus({ type: 'idle' }), 5000)
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.'
        })
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.'
      })
    }
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-lg opacity-95">
            Have a question or investment inquiry? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-foreground">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Address</p>
                    <p className="text-foreground/70 text-sm">
                      6th Floor Landmark Towers, 5B Water Corporation Way Oniru, Victoria Island, Lagos
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Phone</p>
                    <a href="tel:+2340145453614" className="text-foreground/70 text-sm hover:text-primary transition-colors">
                      +234 01-4545361
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <a href="mailto:info@fundco.ng" className="text-foreground/70 text-sm hover:text-primary transition-colors">
                      info@fundco.ng
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <Card className="bg-secondary border border-border p-8">
                <h3 className="text-xl font-bold mb-6 text-foreground">Send us a Message</h3>
                
                {status.type === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                    <p className="text-green-800 text-sm">{status.message}</p>
                  </div>
                )}

                {status.type === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
                    <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
                    <p className="text-red-800 text-sm">{status.message}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      rows={5}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={status.type === 'loading'}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  >
                    {status.type === 'loading' ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Card>
            </div>
          </div>

          {/* Additional Info */}
          <Card className="bg-secondary border border-border p-8">
            <h3 className="text-xl font-bold mb-4 text-foreground">Business Hours</h3>
            <p className="text-foreground/70">
              We typically respond to inquiries within 1-2 business days. For urgent matters, please call us directly at the number above.
            </p>
          </Card>
        </div>
      </section>
    </div>
  )
}
