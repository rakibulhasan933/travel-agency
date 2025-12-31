"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle, Loader2 } from "lucide-react"
import { useIsMobile } from "./ui/use-mobile"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const isMobile = useIsMobile()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string),
      message: formData.get("message") as string,
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        setIsSuccess(true)
          ; (e.target as HTMLFormElement).reset()
      } else {
        setError(result.error || "Something went wrong. Please try again.")
      }
    } catch {
      setError("Failed to send message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <section className="md:py-20 py-10 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl shadow-lg p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Message Sent Successfully!</h2>
              <p className="text-muted-foreground mb-8">
                Thank you for contacting us. We've received your message and will get back to you within 24 hours.
              </p>
              <Button onClick={() => setIsSuccess(false)} variant="outline">
                Send Another Message
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="md:py-20 mt-10 py-10 bg-muted/30">
      <div className="container mx-auto md:px-4 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl shadow-lg p-2 md:p-12">
            <form onSubmit={handleSubmit} className="md:space-y-6 space-y-2">

              <div className="md:space-y-2 text-[12px] space-y-0.5">
                <Label className=" " htmlFor="name">Name *</Label>
                <Input id="name" name="name" placeholder="John" required className="md:h-12 h-6" />
              </div>


              <div className="md:space-y-2 text-[12px] space-y-0.5">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" name="email" type="email" placeholder="john@example.com" required className="md:h-12 h-6" />
              </div>

              <div className="md:space-y-2 text-[12px] space-y-0.5">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+88017 0000-0000" className="md:h-12 h-6" />
              </div>
              <div className="md:space-y-2 text-[12px] space-y-0.5">
                <Label htmlFor="message">Your Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us how we can help you..."
                  required
                  className="md:min-h-120 min-h-15 text-[12px] resize-none"
                />
              </div>

              {error && (
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
                  {error}
                </div>
              )}

              <Button type="submit" size={`${isMobile ? "sm" : "lg"}`} className="w-full h-14 text-lg" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                By submitting this form, you agree to our privacy policy. We'll never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
