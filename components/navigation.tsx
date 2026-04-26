'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/investment-approach', label: 'Investment Approach' },
    { href: '/funds', label: 'Funds' },
    { href: '/team', label: 'Team' },
    { href: '/contact', label: 'Contact' },
  ]

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="bg-background border-b border-border/40 sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex-shrink-0 font-bold text-xl md:text-2xl text-primary hover:opacity-80 transition-opacity duration-200"
            onClick={closeMenu}
          >
            FundCo
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-all duration-200"
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
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 shadow-sm hover:shadow-md">
              Investor Login
            </Button>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-foreground hover:bg-primary/10 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - Animated Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-border/40 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-all duration-200"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://investor.fundco.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              onClick={closeMenu}
            >
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 shadow-sm hover:shadow-md">
                Investor Login
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
