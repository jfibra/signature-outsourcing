import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  // Set CORS headers
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  }

  try {
    console.log("API route called")

    // Debug environment variables
    console.log("Environment check:")
    console.log("NODE_ENV:", process.env.NODE_ENV)
    console.log("Resend exists:", !!process.env.Resend)

    // Parse request body
    let body
    try {
      body = await request.json()
      console.log("Request body parsed successfully")
    } catch (parseError) {
      console.error("Failed to parse request body:", parseError)
      return NextResponse.json({ success: false, message: "Invalid request body" }, { status: 400, headers })
    }

    const {
      firstName,
      lastName,
      email,
      phone,
      location,
      company,
      staffCount,
      message,
      marketing,
      outsourcingInterest,
    } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !location || !company || !staffCount) {
      console.log("Missing required fields")
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400, headers })
    }

    // Log the form submission
    const submissionData = {
      timestamp: new Date().toISOString(),
      firstName,
      lastName,
      email,
      company,
      phone,
      location,
      staffCount,
      message,
      marketing,
      outsourcingInterest,
    }

    console.log("=== CONTACT FORM SUBMISSION ===")
    console.log(JSON.stringify(submissionData, null, 2))
    console.log("===============================")

    // Check if Resend is available - try with correct case "Resend"
    const resendKey = process.env.Resend || process.env.RESEND || process.env.RESEND_API_KEY

    if (!resendKey) {
      console.log("Resend environment variable not found in any form")
      return NextResponse.json(
        {
          success: true,
          message: "Form submitted successfully! Your information has been received and logged.",
        },
        { status: 200, headers },
      )
    }

    // Try to send email with Resend if available
    try {
      console.log("Resend key found, attempting to import and use Resend...")

      const { Resend } = await import("resend")
      const resend = new Resend(resendKey)

      // Add both the main recipient and CC the submitter's email
      const emailData = {
        from: "Signature Outsourcing <onboarding@resend.dev>",
        to: ["info@signatureoutsourcing.com"],
        cc: [email], // CC the person who submitted the form
        replyTo: email,
        subject: `🏗️ New Contact: ${firstName} ${lastName} from ${company}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #0a2642 0%, #00c2ff 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
              <h1 style="margin: 0; font-size: 28px; font-weight: 300;">🏗️ New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0;">Signature Outsourcing Solutions</p>
            </div>
            
            <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 0 20px rgba(0,0,0,0.1);">
              <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #00c2ff; margin-bottom: 15px;">
                <label style="font-weight: 600; color: #0a2642; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; display: block;">Contact Information</label>
                <div style="color: #555; font-size: 16px;">
                  <strong>Name:</strong> ${firstName} ${lastName}<br>
                  <strong>Email:</strong> ${email}<br>
                  <strong>Phone:</strong> ${phone}<br>
                  <strong>Location:</strong> ${location}<br>
                  <strong>Company:</strong> ${company}<br>
                  <strong>Staff Count:</strong> ${staffCount}
                </div>
              </div>

              ${
                message
                  ? `
              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #ff0099; margin-bottom: 20px;">
                <label style="font-weight: 600; color: #0a2642; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; display: block;">📝 Message</label>
                <div style="margin-top: 10px; color: #555;">${message.replace(/\n/g, "<br>")}</div>
              </div>
              `
                  : ""
              }

              <div style="background: #e6f9ff; padding: 20px; border-radius: 8px;">
                <h3 style="margin-top: 0; color: #0a2642;">Contact Preferences</h3>
                <div style="margin-bottom: 10px;">
                  <span style="background: ${
                    outsourcingInterest ? "#4caf50" : "#f44336"
                  }; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; margin-right: 10px;">
                    ${outsourcingInterest ? "Yes" : "No"}
                  </span>
                  Wants to be contacted about outsourcing
                </div>
                <div>
                  <span style="background: ${
                    marketing ? "#4caf50" : "#f44336"
                  }; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; margin-right: 10px;">
                    ${marketing ? "Yes" : "No"}
                  </span>
                  Agrees to marketing communications
                </div>
              </div>

              <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px;">
                <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
              </div>
            </div>
          </div>
        `,
      }

      console.log("Attempting to send email to info@signatureoutsourcing.com with CC to submitter...")
      console.log("Email data prepared, calling resend.emails.send...")

      const { data, error } = await resend.emails.send(emailData)

      if (error) {
        console.error("Resend API error:", error)
        console.error("Error details:", JSON.stringify(error, null, 2))
        throw new Error(`Resend API error: ${error.message || JSON.stringify(error)}`)
      }

      console.log("Email sent successfully!")
      console.log("Resend response data:", JSON.stringify(data, null, 2))

      return NextResponse.json(
        {
          success: true,
          message:
            "Thank you! Your message has been sent successfully. You'll also receive a copy of this submission at your email address.",
          emailId: data.id,
        },
        { status: 200, headers },
      )
    } catch (emailError) {
      console.error("Email sending failed with error:", emailError)
      console.error("Error stack:", emailError.stack)

      // Still return success but indicate email issue
      return NextResponse.json(
        {
          success: true,
          message:
            "Form submitted successfully! Your information has been received (email service temporarily unavailable).",
          debug: emailError.message,
        },
        { status: 200, headers },
      )
    }
  } catch (error) {
    console.error("API route error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500, headers },
    )
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })
}
