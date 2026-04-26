import { Resend } from 'resend'
import { z } from 'zod'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

type ContactData = z.infer<typeof contactSchema>

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate request body
    const validatedData = contactSchema.parse(body)

    // Send email via Resend
    const emailResponse = await resend.emails.send({
      from: 'FundCo Contact Form <onboarding@resend.dev>',
      to: 'info@fundco.ng',
      replyTo: validatedData.email,
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <h3>Message:</h3>
          <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p style="color: #666; font-size: 12px;">
            This email was sent via the FundCo website contact form.
          </p>
        </div>
      `
    })

    // Send confirmation email to user
    await resend.emails.send({
      from: 'FundCo <onboarding@resend.dev>',
      to: validatedData.email,
      subject: 'Thank you for contacting FundCo',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2>Thank You for Contacting FundCo</h2>
          <p>Dear ${validatedData.name},</p>
          <p>
            We have received your message and appreciate your interest in FundCo. 
            Our team will review your inquiry and get back to you as soon as possible.
          </p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <h3>Your Message:</h3>
          <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p>Best regards,<br>The FundCo Team</p>
          <p style="color: #666; font-size: 12px;">
            <strong>FundCo Capital Managers</strong><br>
            6th Floor Landmark Towers<br>
            5B Water Corporation Way Oniru<br>
            Victoria Island, Lagos<br>
            Phone: +234 01-4545361<br>
            Email: info@fundco.ng
          </p>
        </div>
      `
    })

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation error',
          details: error.errors
        },
        { status: 400 }
      )
    }

    console.error('Contact form error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to send email. Please try again later.'
      },
      { status: 500 }
    )
  }
}
