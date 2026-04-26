import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">FundCo</h3>
            <p className="text-sm leading-relaxed">
              Specializing in alternative asset management and sustainable infrastructure investment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/funds" className="hover:text-primary transition-colors">
                  Our Funds
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-primary transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-primary transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/corporate-governance" className="hover:text-primary transition-colors">
                  Corporate Governance
                </Link>
              </li>
              <li>
                <Link href="/whistleblowing-policy" className="hover:text-primary transition-colors">
                  Whistleblowing Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span>6th Floor Landmark Towers, 5B Water Corporation Way Oniru, Victoria Island, Lagos</span>
              </li>
              <li className="flex gap-2">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a href="tel:+2340145453614" className="hover:text-primary transition-colors">
                  +234 01-4545361
                </a>
              </li>
              <li className="flex gap-2">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a href="mailto:info@fundco.ng" className="hover:text-primary transition-colors">
                  info@fundco.ng
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-border/30 pt-8 pb-4">
          <div className="flex items-center justify-between">
            <p className="text-sm">© 2024, All Rights Reserved, FundCo Capital Managers</p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-primary transition-colors"
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
