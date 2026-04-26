import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground/5 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg text-primary mb-4">FundCo</h3>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Specializing in alternative asset management and sustainable infrastructure investment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/funds" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                  Our Funds
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/corporate-governance" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                  Corporate Governance
                </Link>
              </li>
              <li>
                <Link href="/whistleblowing-policy" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                  Whistleblowing Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/70">6th Floor Landmark Towers, 5B Water Corporation Way Oniru, Victoria Island, Lagos</span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <a href="tel:+2340145453614" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                  +234 01-4545361
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:info@fundco.ng" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                  info@fundco.ng
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/40 pt-8">
          {/* Social Links */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-foreground/60">
              © {currentYear}, All Rights Reserved, FundCo Capital Managers
            </p>
            <div className="flex gap-5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-foreground/60 hover:text-primary transition-colors duration-200 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-foreground/60 hover:text-primary transition-colors duration-200 hover:scale-110"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
