import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us | GlobalVoyage - Get in Touch",
  description:
    "Have questions about your travel plans? Contact GlobalVoyage and our team will get back to you shortly.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
        breadcrumb="Contact"
      />
      <ContactForm />
    </main>
  )
}
