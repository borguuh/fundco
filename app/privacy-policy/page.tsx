import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy – FundCo',
  description: 'FundCo privacy policy regarding data collection and user information.'
}

export default function PrivacyPolicy() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-sm opacity-75">Last updated: April 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert max-w-none">
          <div className="text-foreground">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Introduction</h2>
            <p className="mb-6 leading-relaxed text-foreground/80">
              This Privacy Policy describes our policies and procedures on the collection, use and disclosure of your information when you use our Service and tells you about your privacy rights and how the law protects you.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-foreground">Information We Collect</h2>
            <p className="mb-6 leading-relaxed text-foreground/80">
              We may collect personal data including your name, email address, phone number, and any other information you choose to provide through our website contact forms.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-foreground">How We Use Your Information</h2>
            <p className="mb-6 leading-relaxed text-foreground/80">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2 text-foreground/80">
              <li>Provide and maintain our Service</li>
              <li>Notify you about changes to our Service</li>
              <li>Allow you to participate in interactive features of our Service</li>
              <li>Provide customer support</li>
              <li>Monitor the usage of our Service</li>
              <li>Detect, prevent and address technical and security issues</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 text-foreground">Data Security</h2>
            <p className="mb-6 leading-relaxed text-foreground/80">
              The security of your Personal Data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-foreground">Cookies</h2>
            <p className="mb-6 leading-relaxed text-foreground/80">
              Our Service may use cookies to enhance your experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-foreground">Third-Party Links</h2>
            <p className="mb-6 leading-relaxed text-foreground/80">
              Our Service may contain links to external websites that are not operated by us. We are not responsible for the privacy practices of these external sites and recommend reviewing their privacy policies.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-foreground">Changes to This Policy</h2>
            <p className="mb-6 leading-relaxed text-foreground/80">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Us</h2>
            <p className="leading-relaxed text-foreground/80">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <strong>Email:</strong> info@fundco.ng
              <br />
              <strong>Address:</strong> 6th Floor Landmark Towers, 5B Water Corporation Way Oniru, Victoria Island, Lagos
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
