'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/about', label: 'ABOUT US' },
    { href: '/investment-approach', label: 'INVESTMENT APPROACH' },
    { href: '/funds', label: 'FUNDS' },
    { href: '/team', label: 'TEAM' },
    { href: '/contact', label: 'CONTACT' },
  ]

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 font-bold text-xl md:text-2xl text-primary">
            FundCo
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <a
            href="https://investor.fundco.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block"
          >
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Investor Login
            </Button>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://investor.fundco.ng"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Investor Login
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
