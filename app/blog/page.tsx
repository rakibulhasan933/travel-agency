import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { PageHeader } from "@/components/page-header"
import { BlogGrid } from "@/components/blog-grid"
import { BlogCategories } from "@/components/blog-categories"
import { BlogNewsletter } from "@/components/blog-newsletter"

export const metadata: Metadata = {
  title: "Travel Blog | GlobalVoyage - Travel Tips & Inspiration",
  description:
    "Discover travel tips, destination guides, visa information, and inspiring stories from around the world.",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHeader
        title="Travel Blog"
        subtitle="Tips, guides, and inspiring stories for your next adventure"
        breadcrumb="Blog"
      />
      <BlogCategories />
      <BlogGrid />
      <BlogNewsletter />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
