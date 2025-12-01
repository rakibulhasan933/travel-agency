"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  subject: string
  destination?: string
  message: string
}

export async function sendContactEmail(formData: FormData) {
  const data: ContactFormData = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    phone: (formData.get("phone") as string) || undefined,
    subject: formData.get("subject") as string,
    destination: (formData.get("destination") as string) || undefined,
    message: formData.get("message") as string,
  }

  // Validate required fields
  if (!data.firstName || !data.lastName || !data.email || !data.subject || !data.message) {
    return { success: false, error: "Please fill in all required fields." }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    return { success: false, error: "Please enter a valid email address." }
  }

  const subjectLabels: Record<string, string> = {
    general: "General Inquiry",
    booking: "Booking Question",
    visa: "Visa Services",
    tour: "Tour Packages",
    support: "Customer Support",
    feedback: "Feedback",
    other: "Other",
  }

  const emailHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f5;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f5; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); padding: 40px 40px; text-align: center;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">GlobalVoyage</h1>
                    <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">New Contact Form Submission</p>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 40px;">
                    <!-- Subject Badge -->
                    <div style="margin-bottom: 30px;">
                      <span style="background-color: #0ea5e9; color: #ffffff; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 600;">
                        ${subjectLabels[data.subject] || data.subject}
                      </span>
                    </div>
                    
                    <!-- Contact Details -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                      <tr>
                        <td style="padding: 15px 0; border-bottom: 1px solid #e4e4e7;">
                          <p style="margin: 0; color: #71717a; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Full Name</p>
                          <p style="margin: 5px 0 0 0; color: #18181b; font-size: 16px; font-weight: 600;">${data.firstName} ${data.lastName}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 15px 0; border-bottom: 1px solid #e4e4e7;">
                          <p style="margin: 0; color: #71717a; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Email Address</p>
                          <p style="margin: 5px 0 0 0; color: #18181b; font-size: 16px;">
                            <a href="mailto:${data.email}" style="color: #0ea5e9; text-decoration: none;">${data.email}</a>
                          </p>
                        </td>
                      </tr>
                      ${
                        data.phone
                          ? `
                      <tr>
                        <td style="padding: 15px 0; border-bottom: 1px solid #e4e4e7;">
                          <p style="margin: 0; color: #71717a; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Phone Number</p>
                          <p style="margin: 5px 0 0 0; color: #18181b; font-size: 16px;">
                            <a href="tel:${data.phone}" style="color: #0ea5e9; text-decoration: none;">${data.phone}</a>
                          </p>
                        </td>
                      </tr>
                      `
                          : ""
                      }
                      ${
                        data.destination
                          ? `
                      <tr>
                        <td style="padding: 15px 0; border-bottom: 1px solid #e4e4e7;">
                          <p style="margin: 0; color: #71717a; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Preferred Destination</p>
                          <p style="margin: 5px 0 0 0; color: #18181b; font-size: 16px; font-weight: 600;">${data.destination}</p>
                        </td>
                      </tr>
                      `
                          : ""
                      }
                    </table>
                    
                    <!-- Message -->
                    <div style="background-color: #f4f4f5; border-radius: 12px; padding: 25px; margin-bottom: 30px;">
                      <p style="margin: 0 0 10px 0; color: #71717a; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
                      <p style="margin: 0; color: #18181b; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${data.message}</p>
                    </div>
                    
                    <!-- Reply Button -->
                    <div style="text-align: center;">
                      <a href="mailto:${data.email}?subject=Re: ${subjectLabels[data.subject] || data.subject}" 
                         style="display: inline-block; background-color: #0ea5e9; color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px;">
                        Reply to ${data.firstName}
                      </a>
                    </div>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background-color: #f4f4f5; padding: 25px 40px; text-align: center;">
                    <p style="margin: 0; color: #71717a; font-size: 13px;">
                      This email was sent from the GlobalVoyage contact form.
                    </p>
                    <p style="margin: 10px 0 0 0; color: #a1a1aa; font-size: 12px;">
                      Received on ${new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `

  try {
    await resend.emails.send({
      from: "GlobalVoyage <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "your-email@example.com",
      replyTo: data.email,
      subject: `[GlobalVoyage] ${subjectLabels[data.subject] || data.subject} from ${data.firstName} ${data.lastName}`,
      html: emailHtml,
    })

    return { success: true }
  } catch {
    console.error("Failed to send email")
    return { success: false, error: "Failed to send email. Please try again later." }
  }
}
