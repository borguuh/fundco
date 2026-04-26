import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer – FundCo',
  description: 'Legal disclaimer for FundCo website and services.'
}

export default function Disclaimer() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Disclaimer</h1>
          <p className="text-sm opacity-75">Last updated: April 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert max-w-none">
          <div className="text-foreground">
            <h2 className="text-2xl font-bold mb-4 text-foreground">General Disclaimer</h2>
            <p className="mb-6 leading-relaxed text-foreground/80">
              The information contained on this website is for general information purposes only. FundCo Capital Managers assumes no responsibility for errors or omissions in the contents of this website.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-foreground">Limitation of Liability</h2>
            <p className="mb-6 leading-relaxed text-foreground/80">
              In no event shall FundCo be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of this website or the contents thereof.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-foreground">External Links</h2>
            <p className="mb-6 leading-relaxed text-foreground/80">
              This website may contain links to external websites that are not provided or maintained by us. FundCo does not guarantee the accuracy, relevance, timeliness, or completeness of information on these external websites.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-foreground">No Professional Advice</h2>
            <p className="mb-6 leading-relaxed text-foreground/80">
              The information provided on this website is not intended as legal, accounting, tax, or financial advice. It should not be used as a substitute for consultation with professional advisers. Always seek independent professional advice before making any investment decisions.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-foreground">Investment Risks</h2>
            <p className="mb-6 leading-relaxed text-foreground/80">
              All investment products involve risk, including possible loss of principal. Past performance is not indicative of future results. The value of investments may fluctuate and you may not recover your initial investment.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-foreground">Regulatory Status</h2>
            <p className="mb-6 leading-relaxed text-foreground/80">
              FundCo is authorised and registered by the Nigeria Securities & Exchange Commission to conduct the business of a fund/portfolio manager. This authorization is subject to regulatory requirements and oversight.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-foreground">Use at Your Own Risk</h2>
            <p className="mb-6 leading-relaxed text-foreground/80">
              All information in this website is provided "as is" without warranty of any kind, express or implied. FundCo will not be liable for any decision made or action taken in reliance on the information provided on this website.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Us</h2>
            <p className="leading-relaxed text-foreground/80">
              If you have questions about this disclaimer, please contact us at:
              <br />
              <strong>Email:</strong> info@fundco.ng
              <br />
              <strong>Phone:</strong> +234 01-4545361
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
