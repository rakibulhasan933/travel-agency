import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { PageHeader } from "@/components/page-header"
import { ServicesGrid } from "@/components/services-grid"
import { ServiceProcess } from "@/components/service-process"
import { ServicesCTA } from "@/components/services-cta"

export const metadata: Metadata = {
  title: "Our Services | GlobalVoyage - Complete Travel Solutions",
  description:
    "Explore our comprehensive travel services including visa processing, flight booking, tour planning, hotel reservations, and more.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive travel solutions tailored to your needs"
        breadcrumb="Services"
      />
      <ServicesGrid />
      <ServiceProcess />
      <ServicesCTA />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
